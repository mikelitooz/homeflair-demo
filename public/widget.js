/**
 * HomeFlair Chat Widget - widget.js
 * -----------------------------------------------------------------------------
 * Presentation layer ONLY. This file handles:
 *   - Floating chat bubble and panel UI
 *   - User input capture and POST to the n8n webhook
 *   - Rendering bot replies and suggested-reply chips
 *   - sessionId persistence in localStorage
 *   - Product-context detection from the current page
 *
 * This file contains ZERO price logic, ZERO hallucination-guard logic, and
 * ZERO delivery-routing logic. All validation lives server-side in the n8n
 * "Validate Response" Code node (section 6 of the kickoff spec).
 * -----------------------------------------------------------------------------
 */

(function () {
  'use strict';

  /* -- 0. Config ---------------------------------------------------------- */
  // NOTE: Do NOT snapshot productContext/webhookUrl here. ChatWidget.tsx
  // reassigns window.HF_WIDGET_CONFIG on every SPA navigation, so anything
  // captured at boot goes stale. We read window.HF_WIDGET_CONFIG LIVE at
  // send-time instead (see getConfig()).
  function getConfig() {
    return window.HF_WIDGET_CONFIG || {};
  }

  if (!getConfig().webhookUrl) {
    console.warn('[HomeFlair Widget] webhookUrl not set, widget disabled.');
    return;
  }

  /* -- 1. Session ID ------------------------------------------------------ */
  function getSessionId() {
    const KEY = 'hf_chat_session_id';
    let id = localStorage.getItem(KEY);
    if (!id) {
      id = crypto.randomUUID
        ? crypto.randomUUID()
        : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = (Math.random() * 16) | 0;
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
          });
      localStorage.setItem(KEY, id);
    }
    return id;
  }

  /* -- 2. Product-context detection --------------------------------------- */
  /**
   * Read product metadata for the current page.
   * PRIMARY source: window.HF_WIDGET_CONFIG.productContext, set live by
   * ChatWidget.tsx (authoritative, has title, price, brand, sku, leadTimeType).
   * FALLBACK (only if config has none): scrape page meta tags.
   */
  function detectProductContext() {
    // -- FIX: read the LIVE config, not a boot-time snapshot. --
    const liveConfig = getConfig();
    if (liveConfig.productContext) {
      return liveConfig.productContext;
    }

    const url = window.location.href;
    const isProductPage = url.includes('/products/') || url.includes('/product/');
    if (!isProductPage) return null;

    const getMeta = (name) => {
      const el = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`);
      return el ? el.getAttribute('content') || '' : '';
    };

    const name  = getMeta('og:title') || document.title || '';

    const handleMatch = url.match(/\/(products|product)\/([^/?#]+)/);
    const handle      = handleMatch ? handleMatch[2] : '';

    const breadcrumbs = Array.from(document.querySelectorAll('a[href*="/collections/"]'))
                             .map(a => a.href);
    const inStockSlugs = ['in-stock-to-go', 'rattan-furniture-clearance', 'ex-display-sofas'];
    const isInStock    = breadcrumbs.some(href => inStockSlugs.some(s => href.includes(s)));
    const leadTimeType = isInStock ? 'in_stock' : 'made_to_order';

    return {
      handle,
      name,
      leadTimeType,
      url: url.split('?')[0],
    };
  }

  /* -- 3. API call -------------------------------------------------------- */
  async function sendMessage(userMessage) {
    // -- FIX: read live config for URL + key too (same staleness class). --
    const liveConfig     = getConfig();
    const sessionId      = getSessionId();
    const productContext = detectProductContext();
    const pageUrl        = window.location.href;

    const payload = {
      sessionId,
      userMessage,
      productContext,   // null on non-product pages
      pageUrl,
    };

    const res = await fetch(liveConfig.webhookUrl || '', {
      method  : 'POST',
      headers : {
        'Content-Type' : 'application/json',
        'X-Widget-Key' : liveConfig.widgetKey || '',
      },
      body    : JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Webhook returned ${res.status}`);
    }

    return await res.json();
  }

  /* -- 4. DOM construction ------------------------------------------------ */
  function buildWidget() {
    const link = document.createElement('link');
    link.rel   = 'stylesheet';
    link.href  = (getConfig().cssUrl || '') || (
      (document.currentScript ? document.currentScript.src : '').replace('widget.js', 'widget.css')
    );
    document.head.appendChild(link);

    const bubble = document.createElement('button');
    bubble.id          = 'hf-chat-bubble';
    bubble.className   = 'hf-bubble';
    bubble.setAttribute('aria-label', 'Open HomeFlair chat assistant');
    bubble.innerHTML   = '\u{1F4AC}';

    const panel = document.createElement('div');
    panel.id        = 'hf-chat-panel';
    panel.className = 'hf-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'HomeFlair chat assistant');
    panel.setAttribute('aria-hidden', 'true');

    panel.innerHTML = `
      <div class="hf-panel-header">
        <span class="hf-panel-title">HomeFlair Assistant</span>
        <button class="hf-close-btn" id="hf-close-btn" aria-label="Close chat">\u2715</button>
      </div>
      <div class="hf-messages" id="hf-messages" aria-live="polite" aria-relevant="additions"></div>
      <div class="hf-chips" id="hf-chips"></div>
      <form class="hf-input-row" id="hf-form" autocomplete="off">
        <input
          type="text"
          id="hf-input"
          class="hf-input"
          placeholder="Ask about products, delivery..."
          aria-label="Type your message"
          maxlength="500"
          required
        />
        <button type="submit" class="hf-send-btn" aria-label="Send message">\u27A4</button>
      </form>
    `;

    document.body.appendChild(bubble);
    document.body.appendChild(panel);

    return { bubble, panel };
  }

  /* -- 5. Message rendering ----------------------------------------------- */
  function appendMessage(messagesEl, text, role) {
    const msg = document.createElement('div');
    msg.className = `hf-msg hf-msg--${role}`;
    msg.textContent = text;
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function appendThinkingIndicator(messagesEl) {
    const el = document.createElement('div');
    el.className = 'hf-msg hf-msg--bot hf-thinking';
    el.id        = 'hf-thinking';
    el.setAttribute('aria-label', 'Assistant is typing');
    el.innerHTML = '<span></span><span></span><span></span>';
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return el;
  }

  function renderChips(chipsEl, replies, onChipClick) {
    chipsEl.innerHTML = '';
    if (!Array.isArray(replies) || replies.length === 0) return;

    replies.forEach(text => {
      const btn = document.createElement('button');
      btn.type      = 'button';
      btn.className = 'hf-chip';
      btn.textContent = text;
      btn.addEventListener('click', () => onChipClick(text));
      chipsEl.appendChild(btn);
    });
  }

  /* -- 6. Widget controller ----------------------------------------------- */
  function init() {
    const { bubble, panel } = buildWidget();
    const messagesEl = document.getElementById('hf-messages');
    const chipsEl    = document.getElementById('hf-chips');
    const form       = document.getElementById('hf-form');
    const input      = document.getElementById('hf-input');
    const closeBtn   = document.getElementById('hf-close-btn');

    let isOpen = false;

    function openPanel() {
      isOpen = true;
      panel.setAttribute('aria-hidden', 'false');
      panel.classList.add('hf-panel--open');
      bubble.setAttribute('aria-expanded', 'true');
      input.focus();
      if (messagesEl.children.length === 0) {
        appendMessage(
          messagesEl,
          "Hi! I'm the HomeFlair Assistant, happy to help with products, delivery, returns, or visiting the showroom. What are you looking for today?",
          'bot'
        );
        renderChips(chipsEl, ['Delivery costs', 'View products', 'Talk to sales'], submitChip);
      }
    }

    function closePanel() {
      isOpen = false;
      panel.setAttribute('aria-hidden', 'true');
      panel.classList.remove('hf-panel--open');
      bubble.setAttribute('aria-expanded', 'false');
    }

    bubble.addEventListener('click', () => isOpen ? closePanel() : openPanel());
    closeBtn.addEventListener('click', closePanel);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closePanel();
    });

    async function submit(text) {
      const trimmed = text.trim();
      if (!trimmed) return;

      input.value = '';
      chipsEl.innerHTML = '';
      appendMessage(messagesEl, trimmed, 'user');

      const thinking = appendThinkingIndicator(messagesEl);

      try {
        const data = await sendMessage(trimmed);
        thinking.remove();
        appendMessage(messagesEl, data.reply || "Sorry, I didn't catch that.", 'bot');
        renderChips(chipsEl, data.suggestedReplies || [], submitChip);
      } catch (err) {
        thinking.remove();
        appendMessage(
          messagesEl,
          "I'm having trouble right now, please try again, or call us on 01709 376633.",
          'bot'
        );
        console.error('[HomeFlair Widget]', err);
      }
    }

    function submitChip(text) {
      submit(text);
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submit(input.value);
    });
  }

  /* -- 7. Boot ------------------------------------------------------------ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
