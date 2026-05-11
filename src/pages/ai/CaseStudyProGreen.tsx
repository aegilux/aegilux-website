import { motion } from "framer-motion";
import { ArrowLeft, Clock, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CaseStudyProGreen = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      <Navbar />

      <main className="relative z-10 pt-24 pb-24">
        <article className="section-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/ai"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-mono-cyber tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to AI Chief of Staff
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="inline-block glass px-4 py-1.5 text-xs font-mono-cyber text-primary tracking-[0.3em] uppercase mb-6 neon-border">
              &lt; Case Study #0 /&gt;
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-bold leading-tight mb-6">
              Pro Green Energy —{" "}
              <span className="gradient-text neon-text">NSW solar installer</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Free pilot in flight. Case study scheduled for publication{" "}
              <strong className="text-foreground">12 June 2026</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass p-8 mb-10 cyber-corners neon-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary neon-border">
                <Clock className="w-5 h-5" />
              </div>
              <span className="font-mono-cyber text-xs tracking-[0.25em] uppercase text-primary">
                Status — Gate 0 in flight
              </span>
              <span className="font-mono-cyber text-[10px] text-primary/50 ml-auto">
                [LIVE]
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              The free pilot with Pro Green Energy is in scope-lock and weekly
              check-in. The published case study will cover scope, agents
              shipped, outcomes, ROI evidence, and a video testimonial.
              Publication is gated on a written sign-off from the Pro Green
              owner.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pro Green is a personal-network engagement disclosed openly: the
              owner is a friend of the founder, the pilot is non-paying, and
              the binding non-monetary commitments (named-brand writeup
              rights, video testimonial, three named peer-installer intros)
              are the exchange.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4 mb-10"
          >
            <div className="service-card cyber-corners">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary neon-border">
                  <Sun className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-sm font-semibold">Vertical</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Solar installer (NSW). Out of scope for the regulated-vertical
                book; Pro Green is a personal-network legacy engagement, not
                the start of a solar practice.
              </p>
            </div>
            <div className="service-card cyber-corners">
              <h3 className="font-heading text-sm font-semibold mb-3">
                What this case study proves
              </h3>
              <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                <li>· End-to-end agent build under a 30–90 day window</li>
                <li>· APP 1.7–1.9 disclosure pack as a Phase 1 deliverable</li>
                <li>· Vapi voice + ServiceM8 + Xero MCP stack delivered</li>
                <li>· Customer-side adoption + measured outcomes</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm mb-6 font-mono-cyber">
              The full writeup lands here on 12&nbsp;June&nbsp;2026. Want a
              walkthrough before then?
            </p>
            <a
              href="mailto:saba@aegilux.com?subject=Pro%20Green%20case%20study%20preview"
              className="glow-button inline-flex items-center justify-center gap-2 text-base"
            >
              Request a preview
            </a>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyProGreen;
