import type { Metadata } from "next";
import { ContactView } from "@/components/sections/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mr Slators Furnishings, view opening hours and plan a visit to our Sheffield showroom."
};

export default function ContactPage() {
  return <ContactView />;
}
