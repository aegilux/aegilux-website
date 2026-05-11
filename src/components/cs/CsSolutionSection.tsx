import { motion } from "framer-motion";
import { ScanSearch, Layers, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: ScanSearch,
    title: "E8 Posture Snapshot",
    price: "5–7 days",
    desc: "Read-only scan of your AWS environment against Essential Eight. PDF report, current ML rating per strategy, prioritised remediation roadmap. Fully credited if you proceed to Landing Zone.",
    status: "ASSESS",
  },
  {
    icon: Layers,
    title: "Landing Zone Lite",
    price: "4 weeks",
    desc: "Terraform-provisioned AWS security foundations in your account. Org structure, SCPs, centralised logging, IAM baseline, Wazuh + Prowler deployed inside your environment.",
    status: "DEPLOY",
  },
  {
    icon: ShieldCheck,
    title: "Managed Security",
    price: "Shield · Sentinel · Fortress",
    desc: "Continuous E8 maturity tracking, evidence on demand, detection + response. 8/5 SOC + 24/7 automated containment (Sentinel); 24/7 human SOC (Fortress). Monthly evidence packages your insurers and customers actually accept.",
    status: "OPERATE",
  },
];

const CsSolutionSection = () => {
  return (
    <section id="how-we-operate" className="py-24 relative">
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
            // How We Operate
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Three Stages.{" "}
            <span className="gradient-text">In-Client Deployment.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aegilux is Australian-owned and Sydney-run. The security stack we
            deploy lives inside <em>your</em> AWS Organisation, not ours. Your
            data never leaves your environment. We operate via scoped, audited
            cross-account IAM roles — every action visible in your CloudTrail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="service-card h-full flex flex-col items-start cyber-corners">
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary neon-border">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono-cyber text-xs text-muted-foreground">
                      STEP_{String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="font-mono-cyber text-[10px] text-primary/70">{step.status}</span>
                  </div>
                </div>
                <h3 className="font-heading text-base font-semibold mb-1">
                  {step.title}
                </h3>
                <p className="font-mono-cyber text-xs text-primary/80 mb-3">
                  {step.price}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {step.desc}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                  <ArrowRight className="w-5 h-5 text-primary drop-shadow-[0_0_6px_hsl(var(--neon-blue)/0.8)]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass p-8 max-w-4xl mx-auto cyber-corners"
        >
          <h3 className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">
            // Where Our SOC Operates
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed text-center max-w-3xl mx-auto">
            Around-the-clock monitoring is delivered by our security operations
            team, which includes analysts based in Pakistan working 8/5 AEST
            coverage hours. They operate <strong className="text-foreground">exclusively inside your AWS environment</strong>{" "}
            via Aegilux-managed VDI, with clipboard and file-transfer
            restrictions, MFA-enforced, and time-boxed least-privilege IAM
            roles. Every session is logged in your account's immutable audit
            trail. <strong className="text-foreground">No client data ever transits offshore.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export { CsSolutionSection };
export default CsSolutionSection;
