import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Scene3D = lazy(() => import("../Scene3D"));

const CsHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-scanlines">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-background" />}>
          <Scene3D />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/90" />
      </div>

      <div className="absolute inset-0 z-[1] cyber-grid opacity-30" />
      <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-[1]" />
      <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent z-[1]" />

      <div className="relative z-10 section-container text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-block glass px-5 py-2 text-xs font-mono-cyber text-primary tracking-[0.3em] uppercase mb-6 neon-border">
            &lt; Managed Cloud Security · AU SaaS / FinTech /&gt;
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
        >
          Essential Eight,{" "}
          <span className="gradient-text neon-text">Operated.</span>
          <br />
          Evidence on Demand.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10"
        >
          Managed cloud security for Australian SMBs running on AWS. We turn
          customer questionnaires, audit evidence, and insurance renewals into a
          24-hour turnaround — without you hiring a security team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#cta" className="glow-button text-base">
            Book a E8 Snapshot
          </a>
          <a href="#how-we-operate" className="glow-button-secondary text-base">
            How We Operate
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-muted-foreground/60 text-sm mt-6 font-mono-cyber"
        >
          AU-owned · In-client AWS deployment · Snapshot in 5–7 days
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-primary/60 text-xs font-mono-cyber tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-primary animate-scroll-indicator" />
      </motion.div>
    </section>
  );
};

export { CsHeroSection };
export default CsHeroSection;
