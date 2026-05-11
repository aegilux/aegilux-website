import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Tier 0 — ADM Readiness Pack",
    subtitle: "Compliance-scared, not yet committed to a build",
    timeline: "5–10 business days",
    highlighted: false,
    features: [
      "Privacy Impact Assessment (15–25 pages)",
      "APP 1.7–1.9 disclosure pack draft",
      "Essential Eight ML2 gap report",
      "ADM register template",
      "1-page board briefing",
      "Artefact-only — no agent build",
      "100% credits to Phase 1 within 30 days",
    ],
  },
  {
    name: "Tier 1 — Discovery & PIA",
    subtitle: "Build-decided, want a fixed-price Phase 1 quote inside a week",
    timeline: "5 business days",
    highlighted: false,
    features: [
      "Recorded discovery sessions",
      "Privacy Impact Assessment",
      "APP 1.7–1.9 disclosure register draft",
      "Essential Eight ML2 gap report",
      "Agent roadmap + Phase 1 SOW",
      "50% credit toward Phase 1 if signed within 45 days",
    ],
  },
  {
    name: "Phase 1 — AI Implementation Sprint",
    subtitle: "Compact / Standard / Embedded — quote on discovery call",
    timeline: "30–90 days",
    highlighted: true,
    badge: "Default quote",
    features: [
      "AI Chief of Staff (multi-skill, autonomous, embedded)",
      "1–2 vertical specialist sub-agents from the library",
      "Optional cross-vertical operational sub-agents",
      "Privacy Impact Assessment delivered with the agent",
      "APP 1.7–1.9 disclosure pack ready for your privacy register",
      "Essential Eight ML2 gap analysis on agent infrastructure",
      "AU-only on AWS Sydney; 7-year immutable audit trail",
      "Embedded tier: customer-held KMS handover + named-attribution rights",
    ],
  },
  {
    name: "Phase 2 — AI Operations",
    subtitle: "Essential / Standard / Premium — mandatory monthly retainer",
    timeline: "12-month minimum commit",
    highlighted: false,
    features: [
      "Monthly evals + drift monitoring",
      "Quarterly governance review",
      "Quarterly Privacy Act compliance attestation",
      "Security patching",
      "Monthly automated compliance report (cyber-insurance evidence)",
      "Day 90 conversion checkpoint pre-committed at Phase 1 SOW signature",
      "Standard + Premium: customer-held KMS, dedicated security patching SLA",
    ],
  },
];

const AiPricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

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
            // Packages
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Two qualifier offers.{" "}
            <span className="gradient-text">Two phases.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tier 0 and Tier 1 qualify the buyer. Phase 1 builds the agent and
            ships the compliance pack. Phase 2 keeps it current. Pricing in
            AUD; quoted on a discovery call.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`service-card flex flex-col cyber-corners relative ${
                p.highlighted
                  ? "neon-border shadow-lg shadow-primary/10"
                  : ""
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground font-mono-cyber tracking-wider whitespace-nowrap">
                    {p.badge}
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="font-heading text-base font-semibold mb-2 leading-snug">
                  {p.name}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  {p.subtitle}
                </p>
                <span className="inline-block text-xs font-mono-cyber text-primary tracking-wider uppercase">
                  {p.timeline}
                </span>
              </div>

              <ul className="space-y-2 text-sm mb-6 flex-1">
                {p.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed"
                  >
                    <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`text-center text-sm py-2.5 px-6 rounded-lg font-medium transition-all ${
                  p.highlighted
                    ? "glow-button"
                    : "glass border border-border hover:border-primary/50 text-foreground"
                }`}
              >
                Book a discovery call
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-10 font-mono-cyber max-w-2xl mx-auto leading-relaxed"
        >
          Pricing in AUD. Phase 1 sized to scope; Phase 2 sized to risk and
          customer-held key custody. Tier 0 and Tier 1 credit toward Phase 1.
          Cancellation removes the agent from production — managed service, not
          software licence.
        </motion.p>
      </div>
    </section>
  );
};

export { AiPricingSection };
export default AiPricingSection;
