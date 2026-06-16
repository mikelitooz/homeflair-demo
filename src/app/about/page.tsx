import type { Metadata } from "next";
import { AboutView } from "@/components/sections/AboutView";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Homeflair, an independent, family-run furniture & carpets store in Rotherham since 1972."
};

export default function AboutPage() {
  return <AboutView />;
}
