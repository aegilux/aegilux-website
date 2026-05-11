import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "Shield",
    subtitle: "Posture + Essential Eight baseline",
    note: "Contact for pricing",
    highlighted: false,
    features: [
      "Continuous AWS posture monitoring (Prowler)",
      "Monthly Essential Eight maturity evidence package",
      "Configuration drift detection + guided remediation",
      "Business hours support (AEST)",
      "Quarterly review call",
    ],
  },
  {
    name: "Sentinel",
    subtitle: "Detection + 8/5 SOC",
    note: "Contact for pricing",
    highlighted: true,
    badge: "Most popular",
    features: [
      "Everything in Shield",
      "Wazuh SIEM deployed in your AWS account",
      "8/5 AEST SOC + 24/7 automated containment",
      "Identity-first defence (FIDO2 MFA, IAM reviews)",
      "Essential Eight ML1 target with quarterly milestones",
      "Commercial EDR integration (CrowdStrike / SentinelOne)",
      "Monthly security review (45-min call + report)",
    ],
  },
  {
    name: "Fortress",
    subtitle: "24/7 SOC + IR + vCISO",
    note: "Contact for pricing",
    highlighted: false,
    features: [
      "Everything in Sentinel",
      "24/7 SOC (offshore + AU on-call for P1)",
      "Formal incident response with documented process",
      "Just-in-time IAM access controls (JIT)",
      "Non-human identity audit (quarterly)",
      "vCISO hours (4 hrs/month) — board reporting + roadmap",
      "Essential Eight ML2 target",
      "Threat hunting (monthly) + audit support",
    ],
  },
];

const qualifierOffers = [
  {
    name: "E8 Posture Snapshot",
    price: "A$2,500",
    timeline: "5–7 business days",
    desc: "Point-in-time Essential Eight posture assessment. Report covers ML0–ML2 gaps, prioritised remediation roadmap, and evidence pack for your cyber insurer. 100% credited against Landing Zone Lite if you proceed.",
  },
  {
    name: "Landing Zone Lite",
    price: "Contact for pricing",
    timeline: "2–4 weeks",
    desc: "AWS account hardening, Prowler deployment, Wazuh SIEM baseline, FIDO2 MFA rollout, and an Essential Eight ML1 evidence pack. One-time engagement; credits against ongoing managed tier.",
  },
];

export default function CsPricing() {
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
              &lt; Cloud Security Pricing /&gt;
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Fixed monthly.{" "}
              <span className="gradient-text neon-text">No volume surprises.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Start with an Essential Eight Posture Snapshot — credited against
              Landing Zone Lite if you proceed. Then pick a managed tier. No
              usage-based billing, no minimum-volume traps.
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
              // One-time entry offers
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {qualifierOffers.map((offer, i) => (
                <div key={i} className="service-card cyber-corners flex flex-col">
                  <h3 className="font-heading text-base font-semibold mb-1">{offer.name}</h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-heading text-2xl font-bold gradient-text">{offer.price}</span>
                    <span className="font-mono-cyber text-xs text-primary tracking-wider">{offer.timeline}</span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed flex-1 mb-5 mt-2">{offer.desc}</p>
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

          {/* Managed tiers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-6 text-center">
              // Managed security tiers
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tiers.map((tier, i) => (
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
                      <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground font-mono-cyber tracking-wider">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="font-heading text-lg font-semibold mb-1">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm">{tier.subtitle}</p>
                  </div>

                  <div className="mb-5">
                    <span className="font-heading text-lg font-bold gradient-text">{tier.note}</span>
                  </div>

                  <ul className="space-y-3 text-sm mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`text-center text-sm py-2.5 px-6 rounded-lg font-medium transition-all ${
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-xs text-muted-foreground font-mono-cyber mb-2 max-w-2xl mx-auto leading-relaxed">
              Plus one-time onboarding and Landing Zone Lite. More than 200 endpoints or more than 5 AWS accounts — custom quote.
              AU-only for regulated buyers. AWS ap-southeast-2 (Sydney). Essential Eight Maturity Model 2 aligned, not certified.
            </p>
            <p className="text-xs text-muted-foreground/60 font-mono-cyber mb-8">
              Pricing confirmed on a discovery call.
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
