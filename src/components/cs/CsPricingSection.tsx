import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Shield",
    subtitle: "Posture + E8 baseline",
    price: "Shield",
    suffix: "",
    note: "Enquire for pricing",
    highlighted: false,
    features: [
      "Continuous AWS posture monitoring (Prowler)",
      "Monthly E8 maturity evidence package",
      "Configuration drift detection + guided remediation",
      "Business hours support (AEST)",
      "Quarterly review call",
    ],
  },
  {
    name: "Sentinel",
    subtitle: "Detection + 8/5 SOC",
    price: "Sentinel",
    suffix: "",
    note: "Enquire for pricing",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Everything in Shield",
      "Wazuh SIEM deployed in your AWS account",
      "8/5 AEST SOC + 24/7 automated containment",
      "Identity-first defence (FIDO2 MFA, IAM reviews)",
      "E8 ML1 target with quarterly milestones",
      "Commercial EDR integration (CrowdStrike / SentinelOne)",
      "Monthly security review (45-min call + report)",
    ],
  },
  {
    name: "Fortress",
    subtitle: "24/7 SOC + IR + vCISO",
    price: "Fortress",
    suffix: "",
    note: "Enquire for pricing",
    highlighted: false,
    features: [
      "Everything in Sentinel",
      "24/7 SOC (offshore + AU on-call for P1)",
      "Formal incident response with documented process",
      "Just-in-time IAM access controls (JIT)",
      "Non-human identity audit (quarterly)",
      "vCISO hours (4 hrs/month) — board reporting + roadmap",
      "E8 ML2 target",
      "Threat hunting (monthly) + audit support",
    ],
  },
];

const CsPricingSection = () => {
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
            // Pricing
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Fixed Monthly.{" "}
            <span className="gradient-text">No Volume Surprises.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start with an E8 Posture Snapshot — credited against Landing
            Zone Lite if you proceed. Then pick a managed tier. No usage-based
            billing, no minimum-volume traps. Pricing on a discovery call.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`service-card flex flex-col cyber-corners relative ${
                plan.highlighted
                  ? "neon-border shadow-lg shadow-primary/10"
                  : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground font-mono-cyber tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold mb-1">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
              </div>

              <div className="mb-2">
                <span className="font-heading text-2xl font-bold gradient-text">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">{plan.suffix}</span>
              </div>
              <p className="font-mono-cyber text-[10px] text-muted-foreground/70 mb-6">
                {plan.note}
              </p>

              <ul className="space-y-3 text-sm mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`text-center text-sm py-2.5 px-6 rounded-lg font-medium transition-all ${
                  plan.highlighted
                    ? "glow-button"
                    : "glass border border-border hover:border-primary/50 text-foreground"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8 font-mono-cyber max-w-2xl mx-auto"
        >
          Plus one-time onboarding and Landing Zone Lite. More than 200 endpoints or
          more than 5 AWS accounts — custom quote.
        </motion.p>
      </div>
    </section>
  );
};

export { CsPricingSection };
export default CsPricingSection;
