import HomeIndex from "@/components/home/HomeIndex";
import { buildPageMetadata } from "@/lib/seoMetadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("en");
}

export default async function Home() {
  return <HomeIndex lang="en" />;
}
