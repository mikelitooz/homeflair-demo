import type { Metadata } from "next";
import { GalleryView } from "@/components/sections/GalleryView";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse our Mr Slators Furnishings showroom gallery – beds, suites, solid pine furniture, and carpets."
};

export default function GalleryPage() {
  return <GalleryView />;
}
