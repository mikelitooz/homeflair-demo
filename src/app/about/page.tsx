import type { Metadata } from "next";
import { AboutView } from "@/components/sections/AboutView";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Mr Slators Furnishings, an independent, family-run furniture & carpets store in Sheffield since 1970."
};

export default function AboutPage() {
  return <AboutView />;
}
