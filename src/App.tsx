import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { useHashScroll } from "./hooks/useHashScroll";

const CloudSecurity = lazy(() => import("./pages/CloudSecurity"));
const Ai = lazy(() => import("./pages/Ai"));
const CaseStudyProGreen = lazy(() => import("./pages/ai/CaseStudyProGreen"));
const Discovery = lazy(() => import("./pages/ai/Discovery"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyAct2026 = lazy(() => import("./pages/PrivacyAct2026"));
const FinancialAdvice = lazy(() => import("./pages/ai/verticals/FinancialAdvice"));
const AlliedHealth = lazy(() => import("./pages/ai/verticals/AlliedHealth"));
const AiPricing = lazy(() => import("./pages/ai/Pricing"));
const CsPricing = lazy(() => import("./pages/cs/Pricing"));

const queryClient = new QueryClient();

function HashScrollHandler() {
  useHashScroll();
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HashScrollHandler />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cloud-security" element={<CloudSecurity />} />
            <Route path="/ai" element={<Ai />} />
            <Route path="/ai/case-studies/pro-green" element={<CaseStudyProGreen />} />
            <Route path="/ai/discovery" element={<Discovery />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-act-2026" element={<PrivacyAct2026 />} />
            <Route path="/ai/verticals/financial-advice" element={<FinancialAdvice />} />
            <Route path="/ai/verticals/allied-health" element={<AlliedHealth />} />
            <Route path="/ai/pricing" element={<AiPricing />} />
            <Route path="/cloud-security/pricing" element={<CsPricing />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
