import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/components/cart/CartProvider";
import { Toast } from "@/components/ui/Toast";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://right-price-carpets-demo.vercel.app"),
  title: {
    default: "Emmy's Shop | Boutique Furniture for Sheffield",
    template: "%s | Emmy's Shop",
  },
  description:
    "Handpicked sofas, beds, dining sets and home decor for Sheffield and Teesside homes. Visit our Sheffield showroom or shop online.",
  openGraph: {
    title: "Emmy's Shop | Boutique Furniture for Sheffield",
    description:
      "Browse boutique furniture, sofas, beds, and home styling. Quality flooring for Teesside homes.",
    type: "website",
  },
};

import { getCategories } from "@/data/ecommerce";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const categories = await getCategories();
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <CartProvider>
          <Header categories={categories} />
          {children}
          <Footer categories={categories} />
          <CartDrawer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
