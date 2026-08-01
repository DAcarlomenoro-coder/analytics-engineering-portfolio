import type { Metadata } from "next";
import { About } from "@/components/About";
import { CareerDirection } from "@/components/CareerDirection";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <About />
      <CareerDirection />
    </>
  );
}
