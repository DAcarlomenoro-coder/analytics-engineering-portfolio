import type { Metadata } from "next";
import { About } from "@/components/About";
import { BusinessValue } from "@/components/BusinessValue";
import { CareerDirection } from "@/components/CareerDirection";
import { MyApproach } from "@/components/MyApproach";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <About />
      <MyApproach />
      <BusinessValue />
      <CareerDirection />
    </>
  );
}
