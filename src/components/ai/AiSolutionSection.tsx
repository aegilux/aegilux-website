import { motion } from "framer-motion";
import { Cpu, ShieldCheck, MapPin, Repeat } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    label: "Pillar 1 — Product",
    status: "ORCHESTRATING",
    title: "An AI Chief of Staff that orchestrates vertical sub-agents",
    desc: "Multi-skill, autonomous, embedded in your operations. Master agent plus 1–2 vertical specialist sub-agents (SoA Drafter, Clinical Note, Tender Drafter, File-Note + Time-Recording, ADM Disclosure Register) plus 1–2 cross-vertical operational sub-agents from the library (Outreach, Inbound Triage, Content Drafter, Inbox Triage, Meeting Prep, Calendar, Document Search, Research, Reporting, HR, Finance, Vendor, Compliance, Customer Success).",
  },
  {
    icon: ShieldCheck,
    label: "Pillar 2 — Compliance moat",
    status: "SHIPPED_INSIDE",
    title: "PIA + APP 1.7–1.9 + Essential Eight ML2 ship inside Phase 1",
    desc: "Privacy Impact Assessment, APP 1.7–1.9 disclosure pack ready for your privacy register, and Essential Eight Maturity Model 2 gap analysis on the agent's infrastructure. Delivered with the agent, not after. Without these three documents, no AI agent deploys in a regulated AU environment in 2026.",
  },
  {
    icon: MapPin,
    label: "Pillar 3 — AU residency proof",
    status: "AP_SOUTHEAST_2",
    title: "AWS Sydney + 7-year immutable audit trail + customer-held keys",
    desc: "Compute on AWS ap-southeast-2 (Sydney), single-tenant per customer. AWS S3 Object Lock 7-year immutable audit trail of every prompt, tool call, and output — independent of the LLM provider's 30–180-day default. Customer-held KMS via OIDC at Standard tier and up; cancellation revokes our access in minutes.",
  },
  {
    icon: Repeat,
    label: "Pillar 4 — Retainer guarantee",
    status: "DAY_90_LOCKED",
    title: "Mandatory Phase 2 + monthly compliance report + Day 90 conversion",
    desc: "Phase 2 retainer is mandatory. Signed at Phase 1 SOW signature. Day 90 conversion checkpoint pre-committed. Monthly automated compliance report to your Compliance Officer, IT Lead, and cyber-insurance underwriter — the renewal evidence chain your insurer reads at policy renewal. Quarterly Privacy Act compliance attestation.",
  },
];

const AiSolutionSection = () => {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

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
            // The Offer
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Four pillars.{" "}
            <span className="gradient-text">One Phase 1.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The agent is the product. Compliance is the moat. AU residency is
            the proof. The retainer keeps it current as the model, your source
            systems, and the regulator move.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="service-card flex flex-col cyber-corners"
            >
              <div className="flex items-center justify-between w-full mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary neon-border">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono-cyber text-xs text-muted-foreground uppercase tracking-wider">
                    {p.label}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono-cyber text-[10px] text-primary/70">
                    {p.status}
                  </span>
                </div>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { AiSolutionSection };
export default AiSolutionSection;
