import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const qualifierOffers = [
  {
    name: "Tier 0 — ADM Readiness Pack",
    price: "A$7,500",
    timeline: "5–10 business days",
    subtitle: "Deadline-pressured, not yet committed to a build",
    highlighted: false,
    creditNote: "100% credits to Phase 1 within 30 days",
    features: [
      "Privacy Impact Assessment (15–25 pages)",
      "APP 1.7–1.9 disclosure pack draft",
      "Essential Eight ML2 gap report",
      "ADM register template",
      "1-page board briefing",
      "Artefact-only — no agent build",
    ],
  },
  {
    name: "Tier 1 — Discovery & PIA",
    price: "A$5,000",
    timeline: "5 business days",
    subtitle: "Build-decided, want a fixed-price Phase 1 quote inside a week",
    highlighted: false,
    creditNote: "A$2,500 non-refundable credit toward Phase 1 within 45 days",
    features: [
      "Recorded discovery sessions",
      "Privacy Impact Assessment",
      "APP 1.7–1.9 disclosure register draft",
      "Essential Eight ML2 gap report",
      "Agent roadmap + Phase 1 SOW",
    ],
  },
];

const phase1Tiers = [
  {
    name: "Compact",
    price: "A$25,000",
    timeline: "30 days",
    desc: "Chief of Staff + 1 vertical sub-agent. PIA-light. Floor for new prospects. Owner-decisive sub-100 staff.",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "A$35,000",
    timeline: "45–60 days",
    desc: "Chief of Staff + 1 vertical sub-agent + 1 cross-vertical sub-agent + full PIA + APP 1.7–1.9 + ML2 gap. Default quote for 100-staff regulated firms.",
    highlighted: true,
    badge: "Default quote",
  },
  {
    name: "Embedded",
    price: "A$55,000",
    timeline: "60–90 days",
    desc: "Chief of Staff + 2 vertical sub-agents + 1–2 cross-vertical sub-agents + customer-held KMS handover + named-attribution rights. 150–200 staff, multi-practice.",
    highlighted: false,
  },
];

const phase2Tiers = [
  {
    name: "Essential",
    price: "A$3,000",
    suffix: "/month",
    features: [
      "Monthly evals + drift monitoring",
      "Quarterly governance review",
      "Quarterly Privacy Act attestation",
      "Security patching",
      "Monthly automated compliance report",
    ],
  },
  {
    name: "Standard",
    price: "A$5,000",
    suffix: "/month",
    highlighted: true,
    badge: "Most popular",
    features: [
      "Everything in Essential",
      "Customer-held KMS via OIDC",
      "8–10 active improvement hours per month",
      "Deeper drift-monitoring cadence",
      "Dedicated security patching SLA",
    ],
  },
  {
    name: "Premium",
    price: "A$8,000",
    suffix: "/month",
    features: [
      "Everything in Standard",
      "Extended active improvement hours",
      "Priority incident response",
      "Quarterly board-pack compliance brief",
    ],
  },
];

export default function AiPricing() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      <Navbar />

      <main className="relative z-10 pt-24 pb-24">
        <div className="section-container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block glass px-4 py-1.5 text-xs font-mono-cyber text-primary tracking-[0.3em] uppercase mb-5 neon-border">
              &lt; AI Chief of Staff Pricing /&gt;
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Two qualifier offers.{" "}
              <span className="gradient-text neon-text">Two phases.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Tier 0 and Tier 1 qualify the buyer. Phase 1 builds the agent
              and ships the compliance pack. Phase 2 keeps it current.
              All prices AUD, ex GST.
            </p>
          </motion.div>

          {/* Qualifier offers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-14"
          >
            <h2 className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-6 text-center">
              // Qualifier offers
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {qualifierOffers.map((offer, i) => (
                <div key={i} className="service-card cyber-corners flex flex-col">
                  <div className="mb-4">
                    <h3 className="font-heading text-base font-semibold mb-1">{offer.name}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-3">{offer.subtitle}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-2xl font-bold gradient-text">{offer.price}</span>
                      <span className="font-mono-cyber text-xs text-primary tracking-wider">{offer.timeline}</span>
                    </div>
                    <p className="font-mono-cyber text-[10px] text-primary/60 mt-1">{offer.creditNote}</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground flex-1 mb-5">
                    {offer.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="glass border border-border hover:border-primary/50 text-foreground text-center text-xs py-2.5 px-5 rounded-lg transition-all font-medium"
                  >
                    Book a discovery call
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Phase 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-2 text-center">
              // Phase 1 — AI Implementation Sprint
            </h2>
            <p className="text-center text-muted-foreground text-sm mb-8">
              50% deposit at SOW signature. Scope locked end of week 1.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {phase1Tiers.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`service-card cyber-corners flex flex-col relative ${
                    tier.highlighted ? "neon-border shadow-lg shadow-primary/10" : ""
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground font-mono-cyber tracking-wider whitespace-nowrap">
                        {tier.badge}
                      </span>
                    </div>
                  )}
                  <h3 className="font-heading text-base font-semibold mb-2">{tier.name}</h3>
                  <p className="font-heading text-3xl font-bold gradient-text mb-1">{tier.price}</p>
                  <p className="font-mono-cyber text-xs text-primary tracking-wider mb-4">{tier.timeline}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed flex-1 mb-5">{tier.desc}</p>
                  <Link
                    to="/contact"
                    className={`text-center text-xs py-2.5 px-5 rounded-lg font-medium transition-all ${
                      tier.highlighted
                        ? "glow-button"
                        : "glass border border-border hover:border-primary/50 text-foreground"
                    }`}
                  >
                    Book a discovery call
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 glass p-4 cyber-corners max-w-3xl mx-auto">
              <p className="font-mono-cyber text-xs text-muted-foreground text-center leading-relaxed">
                Every Phase 1 ships: AI Chief of Staff + vertical specialist sub-agents + PIA + APP 1.7–1.9
                disclosure pack + Essential Eight ML2 gap analysis + 7-year immutable audit trail on AWS S3 ap-southeast-2
              </p>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-2 text-center">
              // Phase 2 — AI Operations (mandatory monthly retainer)
            </h2>
            <p className="text-center text-muted-foreground text-sm mb-8">
              Day 90 conversion checkpoint pre-committed at Phase 1 SOW signature.
              12-month minimum, 90-day cancellation after that.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {phase2Tiers.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`service-card cyber-corners flex flex-col relative ${
                    tier.highlighted ? "neon-border shadow-lg shadow-primary/10" : ""
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground font-mono-cyber tracking-wider whitespace-nowrap">
                        {tier.badge}
                      </span>
                    </div>
                  )}
                  <h3 className="font-heading text-base font-semibold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="font-heading text-3xl font-bold gradient-text">{tier.price}</span>
                    <span className="text-muted-foreground text-sm">{tier.suffix}</span>
                  </div>
                  <ul className="space-y-2 flex-1 mb-5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 glass p-4 cyber-corners max-w-3xl mx-auto">
              <p className="font-mono-cyber text-xs text-muted-foreground text-center leading-relaxed">
                Customer-held KMS via OIDC against your KMS — Standard and Premium only.
                Cancellation removes the agent from production — managed service, not a software licence.
              </p>
            </div>
          </motion.div>

          {/* Notes and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xs text-muted-foreground font-mono-cyber mb-8 leading-relaxed">
              All prices AUD, ex GST. AU-only delivery for regulated buyers.
              AWS ap-southeast-2 (Sydney) primary. Privacy Act 1988 (Cth) + Essential Eight ML2 aligned.
            </p>
            <Link
              to="/contact"
              className="glow-button inline-flex items-center justify-center gap-2 text-sm"
            >
              Book a discovery call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
