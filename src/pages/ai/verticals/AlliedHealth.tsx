import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, FileText, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const painPoints = [
  "Clinical-note backlog — April 2025 ScienceDirect put clinical-note backlog at 20+ clinician-hours per week per 6-clinician practice. Notes happen at 9pm, not in clinic.",
  "NDIS QSC enforcement — Q1 2025: 6,841 compliance activities and 60 banning orders (214% YoY). Audit-pack rebuild was 2–5 days per clinician. The paper trail is the defence.",
  "AI sprawl the practice manager can't govern — Heidi, Lyrebird, and ChatGPT running across clinicians with zero privacy-register entries and zero APP 1.7–1.9 disclosure draft.",
];

const whatWeShip = [
  "AI Chief of Staff — master orchestrator, persistent memory, Telegram / Slack / email / Vapi voice",
  "Clinical Note Drafter sub-agent — ingests session recording (with consent), drafts in clinician voice, AHPRA-mapped headings, posts for clinician review and sign-off",
  "NDIS Plan-Period Agent — reads PMS service entries, validates against NDIS Price Guide (July 2025), generates compliant line items, flags rejection-prone entries",
  "Audit-Pack Generator — defensible QSC / OAIC response packs from the 7-year trail in minutes, not days",
  "Privacy Impact Assessment (15–25 pages) mapped to AHPRA Aug 2024 + ACSQHC Aug 2025",
  "APP 1.7–1.9 disclosure register populated against actual workflows",
  "Essential Eight Maturity Model 2 gap analysis on agent infrastructure",
  "7-year immutable audit trail on AWS S3 Object Lock Compliance mode",
  "Monthly automated compliance report — PDF + JSON to practice manager and underwriter",
];

const hitlSteps = [
  {
    step: "01",
    title: "Agent drafts the note",
    desc: "Clinical Note Drafter ingests the session recording (with consent), drafts the clinical note in the clinician's house style with AHPRA-mapped headings. Under 2 minutes.",
  },
  {
    step: "02",
    title: "Clinician reviews and signs",
    desc: "Draft posted to the practice management system (Cliniko, Halaxy, Power Diary) with a sign-off prompt. Clinician reviews, edits, and applies the approval gesture. Recording, AI draft, edits, and signed note all captured in the diff.",
  },
  {
    step: "03",
    title: "7-year immutable audit trail",
    desc: "Diff preserved end-to-end on AWS S3 Object Lock Compliance mode for 7 years — independent of Anthropic's 30-day default. AHPRA notification interview answer. QSC audit-pack answer.",
  },
];

const pricingTiers = [
  {
    name: "Phase 1 Compact",
    price: "A$25,000",
    timeline: "30 days",
    desc: "Chief of Staff + 1 vertical sub-agent. PIA-light. Single-site, single-discipline, sub-100 staff.",
    highlighted: false,
  },
  {
    name: "Phase 1 Standard",
    price: "A$35,000",
    timeline: "45–60 days",
    desc: "Chief of Staff + Clinical Note Drafter + 1 cross-vertical sub-agent + full PIA + APP + ML2 gap. Default for 100-staff multi-disciplinary practices.",
    highlighted: true,
    badge: "Default quote",
  },
  {
    name: "Phase 1 Embedded",
    price: "A$55,000",
    timeline: "60–90 days",
    desc: "Chief of Staff + 2 vertical sub-agents + 1–2 cross-vertical sub-agents + customer-held KMS + named-attribution rights. 150–200 staff, multi-site.",
    highlighted: false,
  },
];

export default function AlliedHealth() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      <Navbar />

      <main className="relative z-10 pt-24 pb-24">
        <div className="section-container max-w-5xl">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="inline-block glass px-4 py-1.5 text-xs font-mono-cyber text-primary tracking-[0.3em] uppercase mb-5 neon-border">
              &lt; Priority-2 Vertical /&gt;
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              AI Chief of Staff for{" "}
              <span className="gradient-text neon-text">
                Allied Health Practices
              </span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              AHPRA-and-ACSQHC-mapped. NDIS QSC audit-ready. The agent
              and the compliance pack ship inside one Phase 1 engagement —
              so the position holds at the next AHPRA notification interview,
              QSC enforcement activity, and cyber-insurance renewal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="glow-button inline-flex items-center gap-2 text-sm py-3 px-6"
              >
                Book a 20-min call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ai"
                className="glass border border-border hover:border-primary/50 text-foreground inline-flex items-center gap-2 text-sm py-3 px-6 rounded-lg transition-all"
              >
                AI Chief of Staff overview
              </Link>
            </div>
          </motion.div>

          {/* Compliance burden */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-3 block">
              // The compliance burden
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              AHPRA. ACSQHC. NDIS QSC. APP 1.7–1.9.{" "}
              <span className="gradient-text">All converging in 2026.</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-2xl">
              OAIC NDB H1 2025 had health at 18% of notifiable breaches — the
              top reporting sector in Australia. Cyber insurers are repricing
              every practice whether they know it or not.
            </p>
            <div className="space-y-4">
              {painPoints.map((p, i) => (
                <div key={i} className="flex items-start gap-3 glass p-4 cyber-corners">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{p}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-4 gap-4">
              {[
                { label: "AHPRA Aug 2024", desc: "Practitioner accountability non-delegable. Code of Conduct applies to AI tools." },
                { label: "ACSQHC Aug 2025", desc: "Before/while/after sign-off framework. Automation bias warning on commission and omission." },
                { label: "NDIS QSC", desc: "214% YoY enforcement surge, Q1 2025. 6,841 compliance activities. 60 banning orders." },
                { label: "APP 1.7–1.9", desc: "Takes force 10 December 2026. PIA + ADM register mandatory for every in-scope AI system." },
              ].map((item, i) => (
                <div key={i} className="service-card cyber-corners text-center">
                  <p className="font-heading text-sm font-bold text-primary mb-2">{item.label}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What we ship */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-3 block">
              // What we ship
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-8">
              One Phase 1 engagement.{" "}
              <span className="gradient-text">Agent + compliance pack.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {whatWeShip.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 glass p-4 cyber-corners">
              <p className="text-muted-foreground text-xs leading-relaxed font-mono-cyber">
                <span className="text-primary">PMS integrations via MCP</span> —
                Cliniko, Halaxy, Power Diary (Zanda Health), Coreplus, Best
                Practice, MedicalDirector. OAuth-token-based, customer-revocable.
                Zero PMS migration.
              </p>
            </div>
          </motion.div>

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-3 block">
              // How it works
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              Human-in-the-loop by architecture.{" "}
              <span className="gradient-text">Not a bolt-on.</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-2xl">
              AHPRA August 2024 holds the practitioner accountable — not the
              tool. ACSQHC August 2025 frames the before/while/after sign-off
              discipline. That is the design spec, not a constraint. The agent
              drafts. The AHPRA-registered clinician signs.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {hitlSteps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="service-card cyber-corners"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono-cyber text-2xl font-bold text-primary/30">
                      {s.step}
                    </span>
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary neon-border">
                      {i === 0 ? <FileText className="w-4 h-4" /> : i === 1 ? <ShieldCheck className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                    </div>
                  </div>
                  <h3 className="font-heading text-sm font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-3 block">
              // Pricing
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              Fixed-price Phase 1.{" "}
              <span className="gradient-text">Mandatory Phase 2.</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-2xl">
              50% deposit at SOW signature. Phase 2 retainer
              (A$3K–A$8K/mo) signed at the same MSA — mandatory,
              Day 90 checkpoint pre-committed. All prices AUD, ex GST.
              SOW subject to practice manager security questionnaire pass.
            </p>
            <div className="grid sm:grid-cols-3 gap-5 mb-6">
              {pricingTiers.map((tier, i) => (
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
                  <h3 className="font-heading text-sm font-semibold mb-2">{tier.name}</h3>
                  <p className="font-heading text-2xl font-bold gradient-text mb-1">{tier.price}</p>
                  <p className="font-mono-cyber text-xs text-primary tracking-wider mb-3">{tier.timeline}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed flex-1">{tier.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="glass p-5 cyber-corners">
              <p className="font-mono-cyber text-xs text-muted-foreground leading-relaxed">
                <span className="text-primary">Phase 2 retainer</span> — A$3K Essential /
                A$5K Standard / A$8K Premium per month. Mandatory. Monthly
                automated compliance report shipped to practice manager and
                underwriter. Quarterly Privacy Act attestation. 12-month
                minimum, 90-day cancellation after that.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="glass p-8 cyber-corners neon-border text-center"
          >
            <h2 className="font-heading text-xl font-bold mb-3">
              Where does your practice sit against the December 2026 deadline?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-lg mx-auto">
              20-minute call with you and your practice manager. No pitch —
              compare notes on your AI deployment, your QSC audit-readiness,
              and your security questionnaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="glow-button inline-flex items-center justify-center gap-2 text-sm"
              >
                Book a 20-min discovery call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ai/pricing"
                className="glass border border-border hover:border-primary/50 text-foreground inline-flex items-center justify-center gap-2 text-sm py-2.5 px-6 rounded-lg transition-all"
              >
                See full pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
