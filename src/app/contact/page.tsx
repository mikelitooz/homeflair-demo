import type { Metadata } from "next";
import { ContactView } from "@/components/sections/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Emmy's Shop, view opening hours and plan a showroom visit in Sheffield."
};

export default function ContactPage() {
  return <ContactView />;
}
