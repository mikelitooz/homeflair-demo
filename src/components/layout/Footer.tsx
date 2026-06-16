import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone, ShieldCheck, Truck } from "lucide-react";
import { type Category } from "@/data/ecommerce";
import { business } from "@/data/site";

const trustBadges = [
  { icon: ShieldCheck, label: "Quality craftsmanship since 1972" },
  { icon: Truck, label: "Friendly delivery across South Yorkshire" },
  { icon: Clock, label: "Open 6 days a week" },
];

export function Footer({ categories = [] }: { categories: Category[] }) {
  return (
    <footer className="mt-14 bg-graphite text-ivory/70">
      {/* ── Trust badges ─────────────────────────── */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-5 sm:px-6 lg:justify-between lg:px-8">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2.5 text-sm">
              <badge.icon className="h-5 w-5 text-wheat" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main columns ─────────────────────────── */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <Link href="/" className="block mb-4">
            <div className="relative h-12 w-28">
              <Image
                src="/homeflair-logo.png"
                alt="Homeflair Logo - ...It's how you live"
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>
          </Link>
          <p className="mt-3 text-sm leading-7">
            Beds, suites, solid pine furniture, and carpets from a trusted family retailer since 1972. Visit our Rotherham showroom.
          </p>
          <div className="mt-4 space-y-1.5 text-sm">
            <p className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-wheat" /> {business.address}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-wheat" /> {business.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-wheat" /> {business.email}
            </p>
          </div>
        </div>

        {/* Categories */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-wheat">Shop</p>
          <div className="mt-4 grid gap-2 text-sm">
            {categories.slice(0, 6).map((c) => (
              <Link key={c.slug} href={`/category/${c.slug}`} className="hover:text-white transition-colors">
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Shopping links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-wheat">Shopping</p>
          <div className="mt-4 grid gap-2 text-sm">
            <Link href="/shop" className="hover:text-white transition-colors">Shop all furniture</Link>
            <Link href="/cart" className="hover:text-white transition-colors">Your basket</Link>
            <Link href="/checkout" className="hover:text-white transition-colors">Checkout</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Showroom gallery</Link>
            <Link href="/about" className="hover:text-white transition-colors">About us</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Opening hours */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-wheat">Opening Hours</p>
          <div className="mt-4 space-y-1 text-sm">
            {business.hours.map(([day, time]) => (
              <div key={day} className="flex justify-between gap-3">
                <span className="text-ivory/50">{day}</span>
                <span>{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────── */}
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-ivory/40 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Homeflair. All rights reserved. Parkgate Complex, Rawmarsh Rd, Rotherham S60 1RZ.</p>
      </div>
    </footer>
  );
}
