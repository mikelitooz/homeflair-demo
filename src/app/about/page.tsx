import type { Metadata } from "next";
import { AboutView } from "@/components/sections/AboutView";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Derbyshire Suite Centre and the Derby Road Chesterfield showroom positioning."
};

export default function AboutPage() {
  return <AboutView />;
}
