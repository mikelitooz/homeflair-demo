"use client";

import { FormEvent, useState } from "react";
import { Lock, ShieldCheck } from "lucide-react";
import { currency } from "@/data/ecommerce";
import { useCart } from "@/components/cart/CartProvider";

export function CheckoutView() {
  const { subtotal, totalItems } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");

  const onApplyPromo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (promoCode.trim().toLowerCase() === "derbyshire10") {
      setPromoMessage("Promo applied: 10% off selected lines (demo placeholder).");
      return;
    }
    setPromoMessage("Promo code not recognized in demo mode.");
  };

  return (
    <main className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold text-charcoal sm:text-5xl">Checkout</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="space-y-5">
          <article className="rounded-card border border-smoke/50 bg-white p-5 shadow-card">
            <h2 className="text-lg font-bold text-charcoal">Delivery Information</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input placeholder="First name" className="input-field" />
              <input placeholder="Last name" className="input-field" />
              <input placeholder="Email" className="input-field sm:col-span-2" />
              <input placeholder="Phone number" className="input-field sm:col-span-2" />
              <input placeholder="Address line 1" className="input-field sm:col-span-2" />
              <input placeholder="Address line 2" className="input-field sm:col-span-2" />
              <input placeholder="City" className="input-field" />
              <input placeholder="Postcode" className="input-field" />
            </div>
          </article>

          <article className="rounded-card border border-smoke/50 bg-white p-5 shadow-card">
            <h2 className="text-lg font-bold text-charcoal">Payment Details</h2>
            <div className="mt-4 grid gap-3">
              <input placeholder="Name on card" className="input-field" />
              <input placeholder="Card number" className="input-field" />
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="MM / YY" className="input-field" />
                <input placeholder="CVV" className="input-field" />
              </div>
            </div>
          </article>
        </section>

        <aside className="h-fit rounded-card border border-smoke/50 bg-white p-5 shadow-card">
          <h2 className="text-lg font-bold text-charcoal">Order Summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-taupe">Items ({totalItems})</span>
              <span className="font-semibold text-charcoal">{currency(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-taupe">Delivery</span>
              <span className="font-semibold text-charcoal">£0 – £49</span>
            </div>
          </div>

          <form onSubmit={onApplyPromo} className="mt-5 space-y-2">
            <label htmlFor="promo" className="text-sm font-semibold text-charcoal">Promo code</label>
            <div className="flex gap-2">
              <input id="promo" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} className="input-field flex-1" />
              <button type="submit" className="btn-secondary !py-2">Apply</button>
            </div>
            {promoMessage && <p className="text-xs text-taupe">{promoMessage}</p>}
          </form>

          <hr className="my-5 border-smoke/50" />
          <div className="flex justify-between">
            <span className="font-semibold text-charcoal">Estimated total</span>
            <span className="text-xl font-bold text-charcoal">{currency(subtotal)}</span>
          </div>

          <button type="button" className="btn-primary mt-5 w-full justify-center">
            <Lock className="h-4 w-4" /> Place order
          </button>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-taupe">
            <ShieldCheck className="h-3.5 w-3.5" /> Secure checkout · Derbyshire Suite Centre
          </p>
        </aside>
      </div>
    </main>
  );
}
