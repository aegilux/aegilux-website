import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AiHeroSection } from "@/components/ai/AiHeroSection";
import { AiProblemSection } from "@/components/ai/AiProblemSection";
import { AiSolutionSection } from "@/components/ai/AiSolutionSection";
import { AiServicesSection } from "@/components/ai/AiServicesSection";
import { AiResultsSection } from "@/components/ai/AiResultsSection";
import { AiPricingSection } from "@/components/ai/AiPricingSection";
import { AiCTASection } from "@/components/ai/AiCTASection";

export default function Ai() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <AiHeroSection />
        <AiProblemSection />
        <AiSolutionSection />
        <AiServicesSection />
        <AiResultsSection />
        <AiPricingSection />
        <AiCTASection />
      </main>
      <Footer />
    </div>
  );
}
