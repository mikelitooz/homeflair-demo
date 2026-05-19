import type { Metadata } from "next";
import { GalleryView } from "@/components/sections/GalleryView";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse our Homeflair showroom gallery – sofas, leather suites, and rattan garden furniture."
};

export default function GalleryPage() {
  return <GalleryView />;
}
