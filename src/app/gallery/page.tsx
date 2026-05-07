import type { Metadata } from "next";
import { GalleryView } from "@/components/sections/GalleryView";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A premium furniture boutique gallery experience for Emmy's Shop."
};

export default function GalleryPage() {
  return <GalleryView />;
}
