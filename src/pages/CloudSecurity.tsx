import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CsHeroSection } from "@/components/cs/CsHeroSection";
import { CsProblemSection } from "@/components/cs/CsProblemSection";
import { CsSolutionSection } from "@/components/cs/CsSolutionSection";
import { CsServicesSection } from "@/components/cs/CsServicesSection";
import { CsResultsSection } from "@/components/cs/CsResultsSection";
import { CsPricingSection } from "@/components/cs/CsPricingSection";
import { CsCTASection } from "@/components/cs/CsCTASection";

export default function CloudSecurity() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <CsHeroSection />
        <CsProblemSection />
        <CsSolutionSection />
        <CsServicesSection />
        <CsResultsSection />
        <CsPricingSection />
        <CsCTASection />
      </main>
      <Footer />
    </div>
  );
}
