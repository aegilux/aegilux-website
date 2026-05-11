import { motion } from "framer-motion";
import { ScanSearch } from "lucide-react";
import CsLeadForm from "./CsLeadForm";

const CsCTASection = () => {
  return (
    <section id="cta" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.05] to-transparent pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong neon-border text-center py-16 px-6 sm:px-12 max-w-3xl mx-auto relative cyber-corners animated-border"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mb-6 neon-glow">
            <ScanSearch className="w-8 h-8" />
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold mb-4">
            Start with an{" "}
            <span className="gradient-text neon-text">E8 Snapshot</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Delivered in 5–7 business days. PDF report with current ML
            rating per E8 strategy, prioritised remediation roadmap, and AWS
            cost-impact estimate. Fully credited if you proceed to Landing Zone.
          </p>

          <CsLeadForm showPhoneLink={true} />
        </motion.div>
      </div>
    </section>
  );
};

export { CsCTASection };
export default CsCTASection;
