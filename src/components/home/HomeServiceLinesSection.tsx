import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Bot, ArrowRight } from "lucide-react";

const lines = [
  {
    slug: "cloud-security",
    icon: Shield,
    eyebrow: "Cloud Security",
    title: "Essential Eight, Operated.",
    accent: "Evidence on demand.",
    desc: "Managed cloud security for AU SMBs on AWS. We turn security questionnaires, audit evidence, and insurance renewals into a 24-hour turnaround — without you hiring a security team.",
    bullets: [
      "Wazuh SIEM + Prowler CSPM deployed inside your AWS",
      "ASD Essential Eight ML0 → ML1 → ML2 progression",
      "AU-owned, AU-delivered, in-client AWS account",
    ],
    cta: "Explore Cloud Security",
    href: "/cloud-security",
  },
  {
    slug: "ai",
    icon: Bot,
    eyebrow: "AI Chief of Staff",
    title: "An AI Chief of Staff,",
    accent: "your principal can sign.",
    desc: "Custom AI Chief of Staff + vertical sub-agents (SoA Drafter, Clinical Note, Tender Drafter, Privileged-AI Sandbox) for AU regulated SMBs. Shipped with the PIA, APP 1.7–1.9 disclosure register and Essential Eight ML2 gap report your security questionnaire needs.",
    bullets: [
      "Agent drafts, your licensed practitioner signs — 7-yr audit trail",
      "Financial advice · allied health · law · gov-supply · fintech",
      "Phase 1 30–90 days, A$25–55K · Phase 2 retainer A$3–8K/mo",
    ],
    cta: "Explore AI Chief of Staff",
    href: "/ai",
  },
];

const HomeServiceLinesSection = () => {
  return (
    <section
      id="service-lines"
      className="py-24 relative cyber-grid-fine overflow-hidden"
    >
      <div className="cyber-divider mb-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block glass px-5 py-2 text-xs font-mono-cyber text-primary tracking-[0.3em] uppercase mb-6 neon-border">
            &lt; Two service lines /&gt;
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold mb-4">
            One brand.{" "}
            <span className="gradient-text neon-text">Two specialisms.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Pick the service line that maps to where you sit on 10 December
            2026. Most AU regulated SMBs end up on both.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {lines.map((line, idx) => {
            const Icon = line.icon;
            return (
              <motion.div
                key={line.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-strong neon-border cyber-corners animated-border p-8 sm:p-10 flex flex-col"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-6 neon-glow">
                  <Icon className="w-7 h-7" />
                </div>

                <span className="text-xs font-mono-cyber text-primary tracking-[0.3em] uppercase mb-3">
                  {line.eyebrow}
                </span>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                  {line.title}{" "}
                  <span className="gradient-text neon-text">{line.accent}</span>
                </h3>

                <p className="text-muted-foreground text-base mb-6">
                  {line.desc}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {line.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-foreground/85"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-primary shrink-0 neon-glow"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={line.href}
                  className="glow-button text-sm inline-flex items-center justify-center gap-2 group"
                >
                  {line.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground/60 text-center text-xs mt-12 font-mono-cyber tracking-wider"
        >
          AWS ap-southeast-2 (Sydney) primary &middot; Privacy Act 1988 +
          Essential Eight ML2 aligned &middot; AU-only for regulated buyers
        </motion.p>
      </div>
    </section>
  );
};

export { HomeServiceLinesSection };
export default HomeServiceLinesSection;
