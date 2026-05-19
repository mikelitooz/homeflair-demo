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
  metadataBase: new URL("https://homeflair-demo.vercel.app"),
  title: {
    default: "Homeflair | Quality Furniture Since 1972 – Rotherham",
    template: "%s | Homeflair",
  },
  description:
    "Fabric sofas, leather suites, rattan garden furniture and ex-display deals. Visit our Rotherham showroom or shop online. Family-run since 1972.",
  openGraph: {
    title: "Homeflair | Quality Furniture Since 1972 – Rotherham",
    description:
      "Premium sofas, leather suites and exclusive rattan garden furniture from a trusted family retailer. Visit our Parkgate showroom in Rotherham.",
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
