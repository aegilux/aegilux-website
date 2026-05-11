import { motion } from "framer-motion";
import { Eye, ShieldAlert, Scale } from "lucide-react";

const problems = [
  {
    icon: Eye,
    title: "Shadow AI is already happening",
    desc: "Your team is already pasting client information into ChatGPT to draft Statements of Advice, clinical notes, file notes, tender responses. Nobody asked. Your security questionnaire and your PI insurer assume controls you do not yet have.",
  },
  {
    icon: ShieldAlert,
    title: "December 2026 deadline + penalty exposure",
    desc: "APP 1.7–1.9 ADM transparency obligations take force 10 December 2026. Penalty exposure scales with revenue and benefit derived. Cyber-insurance renewals are tightening evidence requirements ahead of the deadline; insurers ask what AI controls were operational at the time of the incident.",
  },
  {
    icon: Scale,
    title: "Big-4 vs offshore: neither fits a 50–200 staff regulated firm",
    desc: "Big-4 quotes a six- to twelve-month engagement. Offshore agencies cannot pass a security questionnaire. You need somebody who has sat on both sides of an audit and can ship an agent with the compliance pack inside one quarter.",
  },
];

const AiProblemSection = () => {
  return (
    <section id="problems" className="py-24 relative cyber-grid-fine">
      <div className="cyber-divider mb-0" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-3 block">
            // The Problem
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Three reasons regulated AU SMBs{" "}
            <span className="gradient-text">have not deployed AI yet</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Microsoft 365 Copilot, Salesforce Agentforce and Atlassian Rovo
            cover 60–70% of in-suite productivity. They stop at glue, governance,
            custom orchestration, and vertical workflow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="service-card text-left group relative cyber-corners"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-destructive/10 text-destructive mb-4 group-hover:neon-glow transition-all border border-destructive/20">
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-base font-semibold mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.desc}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                <span className="font-mono-cyber text-[10px] text-destructive/70 tracking-wider uppercase">
                  Critical
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { AiProblemSection };
export default AiProblemSection;
