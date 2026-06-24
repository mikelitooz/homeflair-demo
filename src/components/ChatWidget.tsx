"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getProductBySlug } from "@/data/ecommerce";

declare global {
  interface Window {
    HF_WIDGET_CONFIG?: {
      webhookUrl: string;
      widgetKey: string;
      cssUrl: string;
      productContext?: {
        handle: string;
        title: string;
        name: string;
        price: number;
        brand: string;
        dimensions: string;
        leadTimeType: "in_stock" | "made_to_order";
        url: string;
        sku: string;
      } | null;
    };
  }
}

export default function ChatWidget() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return;

    const updateContextAndLoad = async () => {
      // 1. Determine product handle from pathname (/product/[slug])
      const isProductPage = pathname?.startsWith("/product/");
      const handle = isProductPage ? pathname.split("/")[2] : null;

      // 2. Fetch product details if we are on a product page
      let productContext = null;
      if (handle) {
        const product = await getProductBySlug(handle);
        if (product) {
          productContext = {
            handle: product.slug,
            title: product.name,
            name: product.name, // for n8n
            price: product.price,
            brand: product.brand || "",
            dimensions: product.dimensions || "", // for n8n
            leadTimeType: product.leadTimeType || "made_to_order",
            url: `${window.location.origin}/product/${product.slug}`,
            sku: product.sku || "", // for n8n
          };
        }
      }

      // 3. Initialize or update HF_WIDGET_CONFIG
      window.HF_WIDGET_CONFIG = {
        webhookUrl: process.env.NEXT_PUBLIC_HOMEFLAIR_WEBHOOK_URL || "",
        widgetKey: process.env.NEXT_PUBLIC_HOMEFLAIR_WIDGET_KEY || "",
        cssUrl: "/widget.css",
        productContext,
      };

      // 4. Inject the script if not already present
      let script = document.getElementById("hf-widget-script") as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = "hf-widget-script";
        script.src = "/widget.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        // If script is already loaded, update its config reference dynamically
        if (window.HF_WIDGET_CONFIG) {
          window.HF_WIDGET_CONFIG.productContext = productContext;
        }
      }
    };

    updateContextAndLoad();
  }, [pathname]);

  // Clean up on unmount (entire layout unmount)
  useEffect(() => {
    return () => {
      if (typeof window === "undefined") return;

      // Remove DOM elements injected by widget
      const bubble = document.getElementById("hf-chat-bubble");
      const panel = document.getElementById("hf-chat-panel");
      const script = document.getElementById("hf-widget-script");

      bubble?.remove();
      panel?.remove();
      script?.remove();

      // Remove the widget stylesheet link
      const links = document.querySelectorAll('link[href*="widget.css"]');
      links.forEach((link) => link.remove());

      delete window.HF_WIDGET_CONFIG;
    };
  }, []);

  return null;
}
