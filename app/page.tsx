import { AdditionalCaseStudies } from "@/components/AdditionalCaseStudies";
import { AIAutomation } from "@/components/AIAutomation";
import { About } from "@/components/About";
import { AnalyticsEngineering } from "@/components/AnalyticsEngineering";
import { CareerDirection } from "@/components/CareerDirection";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { CoreCapabilities } from "@/components/CoreCapabilities";
import { Experience } from "@/components/Experience";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { PowerPlatform } from "@/components/PowerPlatform";
import { PowerPlatformConcept } from "@/components/PowerPlatformConcept";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <CareerDirection />
        <PowerPlatform />
        <FeaturedProjects />
        <PowerPlatformConcept />
        <AdditionalCaseStudies />
        <AnalyticsEngineering />
        <AIAutomation />
        <CoreCapabilities />
        <TechStack />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
