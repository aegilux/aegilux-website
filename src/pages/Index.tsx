import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import { HomeServiceLinesSection } from "@/components/home/HomeServiceLinesSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HomeHeroSection />
        <HomeServiceLinesSection />
      </main>
      <Footer />
    </div>
  );
}
