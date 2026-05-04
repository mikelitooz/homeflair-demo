import type { Metadata } from "next";
import { HomeView } from "@/components/sections/HomeView";

export const metadata: Metadata = {
  title: "Derbyshire Suite Centre | Premium Furniture Showroom Chesterfield",
  description:
    "Explore sofas, beds, wardrobes, carpets, dining furniture and home styling from a polished demo website for Derbyshire Suite Centre."
};

export default function HomePage() {
  return <HomeView />;
}
