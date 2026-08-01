import type { Metadata } from "next";
import { AIAutomation } from "@/components/AIAutomation";
import { AnalyticsEngineering } from "@/components/AnalyticsEngineering";
import { CoreCapabilities } from "@/components/CoreCapabilities";
import { PowerPlatform } from "@/components/PowerPlatform";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <>
      <CoreCapabilities />
      <PowerPlatform />
      <AnalyticsEngineering />
      <AIAutomation />
    </>
  );
}
