import type { Metadata } from "next";
import { TechStack } from "@/components/TechStack";

export const metadata: Metadata = { title: "Tech Stack" };

export default function TechStackPage() {
  return <TechStack />;
}
