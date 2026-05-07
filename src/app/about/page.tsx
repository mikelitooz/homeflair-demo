import type { Metadata } from "next";
import { AboutView } from "@/components/sections/AboutView";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Emmy's Shop, a family-run flooring business in Sheffield."
};

export default function AboutPage() {
  return <AboutView />;
}
