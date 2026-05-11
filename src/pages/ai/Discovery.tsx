import { motion } from "framer-motion";
import { Calendar, ShieldCheck, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import AiLeadForm from "@/components/ai/AiLeadForm";

const Discovery = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="py-4 px-6 sm:px-8">
          <Link to="/ai" className="inline-flex items-center gap-2 group">
            <Calendar className="w-7 h-7 text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--neon-blue)/0.9)] transition-all" />
            <span className="font-heading text-lg font-bold text-foreground">
              Aegilux <span className="text-primary neon-text">AI</span>
            </span>
          </Link>
        </header>

        <main className="flex-1 flex items-start sm:items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <div className="text-center mb-6 sm:mb-8">
              <span className="inline-block glass px-4 py-1.5 text-xs font-mono-cyber text-primary tracking-[0.3em] uppercase mb-5 neon-border">
                &lt; Discovery Call /&gt;
              </span>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 max-w-xl mx-auto">
                Book a 60-minute{" "}
                <span className="gradient-text neon-text">discovery call</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
                We scope your workflow, your security questionnaire, and the
                compliance pack you need before December 2026.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8 text-xs font-mono-cyber tracking-wider text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                AWS ap-southeast-2 (Sydney)
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                Privacy-Act-by-design
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                Essential-Eight aligned
              </span>
            </div>

            <AiLeadForm showPhoneLink={true} />
          </motion.div>
        </main>

        <footer className="py-4 text-center text-muted-foreground/70 text-xs font-mono-cyber">
          © {new Date().getFullYear()} Aegilux Pty Ltd ·{" "}
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>{" "}
          ·{" "}
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Discovery;
