import type { Metadata } from "next";
import { ContactView } from "@/components/sections/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Homeflair, view opening hours and plan a visit to our Rotherham showroom."
};

export default function ContactPage() {
  return <ContactView />;
}
