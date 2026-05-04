import type { Metadata } from "next";
import { ContactView } from "@/components/sections/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Derbyshire Suite Centre, view opening hours and plan a showroom visit in Chesterfield."
};

export default function ContactPage() {
  return <ContactView />;
}
