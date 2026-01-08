import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { DifferenceSection } from "@/components/landing/DifferenceSection";
import { VisionSection } from "@/components/landing/VisionSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { EnterpriseSection } from "@/components/landing/EnterpriseSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ProblemSection />
      <DifferenceSection />
      <VisionSection />
      <HowItWorks />
      <EnterpriseSection />
      <TrustSection />
      <Footer />
    </main>
  );
}
