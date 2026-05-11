import { motion } from "framer-motion";
import { ArrowRight, Calendar, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timelineItems = [
  { date: "10 December 2024", event: "Royal Assent — Privacy and Other Legislation Amendment Act 2024" },
  { date: "10 June 2025", event: "Statutory cause of action for serious invasions of privacy" },
  { date: "October 2025", event: "First civil penalty under Privacy Act — Australian Clinical Labs, A$5.8M" },
  { date: "10 December 2026", event: "APP 1.7–1.9 ADM transparency obligations take force" },
];

const misconceptions = [
  {
    label: "Microsoft Copilot's compliance is enough.",
    correction:
      "Microsoft's compliance covers Microsoft's processing inside its tenancy. Your firm still owes its own internal register, its own PIA on the deployment, its own APP 1.8 categorical disclosures, and its own APP 8 cross-border flow treatment. Vendor-side compliance is necessary, not sufficient.",
  },
  {
    label: "We're a small firm, we won't be enforced.",
    correction:
      "OAIC notified-breach volume is rising — 1,113 in CY2024, +25% YoY. The first civil penalty landed October 2025 on a private pathology firm. APP 1.8 applies to every APP entity with annual turnover above A$3M, or in regulated sectors below the threshold. The below-the-radar assumption costs a defensible position the moment a complaint arrives.",
  },
  {
    label: "Our cyber insurance covers this.",
    correction:
      "Generally no. Cyber-insurance policies typically exclude regulatory penalties. Privacy Act civil penalties are explicitly excluded in many wordings. The 2026 cycle is also tightening: insurers now ask AI-controls questions at renewal and are denying claims where attested controls weren't operational at incident time.",
  },
  {
    label: "We already use First Focus CORE — we're done.",
    correction:
      "Different layer. Tier-2 MSP bundles deliver Copilot deployment, Essential Eight ML2 security posture and data-governance guard rails. They don't ship AI-specific governance artefacts: PIA on the AI deployment, APP 1.7–1.9 register, ML2 gap analysis, 7-year immutable AI-prompt audit trail. Complement, not substitute.",
  },
];

export default function PrivacyAct2026() {
  const daysRemaining = Math.ceil(
    (new Date("2026-12-10").getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      <Navbar />

      <main className="relative z-10 pt-24 pb-24">
        <article className="section-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="inline-block glass px-4 py-1.5 text-xs font-mono-cyber text-primary tracking-[0.3em] uppercase mb-5 neon-border">
              &lt; Anchor Article /&gt;
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              What the December 2026 Privacy Act ADM change means for AU SMBs
              deploying{" "}
              <span className="gradient-text neon-text">AI</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono-cyber mb-8">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                11 May 2026
              </span>
              <span className="text-primary">·</span>
              <span>Saba Jilani, Founder — Aegilux AI</span>
              <span className="text-primary">·</span>
              <span className="text-primary">{daysRemaining} days to deadline</span>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground border-l-2 border-primary pl-5 mb-8">
              On 10 December 2026, three new sub-clauses of Australian Privacy
              Principle 1 commence under the Privacy and Other Legislation
              Amendment Act 2024. Every APP entity that has arranged a computer
              programme to make — or substantially and directly support — a
              decision that could reasonably be expected to significantly affect
              an individual's rights or interests must update its privacy policy
              to disclose what kinds of personal information feed those programmes
              and what kinds of decisions they make. Maximum civil penalty for
              serious or repeated interference: the greater of A$50 million,
              three times the benefit derived, or 30% of adjusted turnover.
            </p>

            <p className="text-muted-foreground text-sm italic mb-8">
              Informational only. Consult a qualified AU privacy lawyer for your
              firm's specific circumstances.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-bold mb-4">
              What the law says
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Three new sub-clauses added to APP 1, the openness principle that
              already requires APP entities to maintain an up-to-date privacy
              policy.
            </p>
            <div className="space-y-5">
              <div className="glass p-5 cyber-corners">
                <h3 className="font-heading text-sm font-semibold mb-2 text-primary">
                  APP 1.7 — when ADM disclosure is triggered
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  An APP entity is captured if it has arranged for a computer
                  programme to make — or do something substantially and directly
                  related to making — a decision that could reasonably be
                  expected to significantly affect an individual's rights or
                  interests, and personal information is used in the operation
                  of that programme.
                </p>
              </div>
              <div className="glass p-5 cyber-corners">
                <h3 className="font-heading text-sm font-semibold mb-2 text-primary">
                  APP 1.8 — what the privacy policy must say
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The kinds of personal information used in the operation of
                  those programmes, the kinds of decisions made solely by the
                  programmes, and the kinds of decisions for which the programme
                  does something substantially and directly related. Categorical,
                  not granular — per the OAIC APP 1 Guidelines, October 2025
                  v1.2.
                </p>
              </div>
              <div className="glass p-5 cyber-corners">
                <h3 className="font-heading text-sm font-semibold mb-2 text-primary">
                  APP 1.9 — meaning of "rights or interests"
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Affected rights and interests include both adverse and
                  beneficial effects. OAIC and the Explanatory Memorandum cite
                  three categories: decisions to grant or refuse a statutory
                  benefit; decisions affecting contractual rights; decisions
                  affecting access to a significant service, support, or
                  opportunity.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-bold mb-4">
              What "substantially automated" actually means
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              The legislation captures two categories: decisions made solely by
              the programme, and decisions for which the programme does
              something substantially and directly related. "Substantially"
              means the programme is a key factor in facilitating human
              decision-making. "Directly" means a direct connection to the
              decision.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="service-card cyber-corners">
                <div className="flex items-start gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/40 mt-1.5 shrink-0" />
                  <span className="font-mono-cyber text-xs text-muted-foreground uppercase tracking-wider">
                    Out of scope
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>· Chatbot answering FAQs</li>
                  <li>· Keyword search</li>
                  <li>· Spell-checker on a draft email</li>
                </ul>
              </div>
              <div className="service-card cyber-corners neon-border">
                <div className="flex items-start gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span className="font-mono-cyber text-xs text-primary uppercase tracking-wider">
                    Clearly in scope
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>· Agent approving or denying a loan</li>
                  <li>· AI auto-classifying an insurance claim</li>
                  <li>· Agent ranking tender bids</li>
                  <li>· Agent drafting a Statement of Advice</li>
                </ul>
              </div>
            </div>
            <div className="glass p-5 cyber-corners border border-yellow-500/20">
              <div className="flex items-start gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                <span className="font-mono-cyber text-xs text-yellow-500 uppercase tracking-wider">
                  OAIC posture on grey zones
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Err toward disclosure — over-inclusion is cheap, under-inclusion
                is enforcement risk. An agent drafting a clinical note an
                AHPRA-registered clinician signs is likely in scope. An agent
                surfacing top three recruitment candidates from a pipeline is
                in scope if the human only reads the surfaced three.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-bold mb-4">
              Five vertical-specific examples
            </h2>
            <div className="space-y-4">
              {[
                {
                  label: "4.1 Financial advice / mortgage / insurance broking",
                  body: "An AI agent drafting a Statement of Advice or Record of Advice for an AFSL-licensed adviser is in scope — personal-information inputs are the client's financials, dependants, risk profile, goals, and product holdings. RG 175 best-interests duty and RG 255 suitably-qualified-individual review layer on top of APP 1.8. Mortgage broker agents pre-scoring a borrower for serviceability against panel-lender criteria are in scope. Insurance underwriting agents that set a premium loading or auto-decline a renewal are clearly in scope.",
                },
                {
                  label: "4.2 Allied health",
                  body: "An agent that drafts a clinical note from a session recording, ranks NDIS participants for capacity allocation in plan-period billing, or generates an audit-pack response for a Quality and Safeguards Commission notice — all touch service continuation, plan billing, and audit defensibility. AHPRA's August 2024 guidance holds the practitioner accountable for clinical decisions; the firm is accountable for disclosing the kinds of personal information and the kinds of decisions the programme is involved in.",
                },
                {
                  label: "4.3 Mid-tier law",
                  body: "An agent that performs conflict-checking on matter intake, prioritises documents in discovery, drafts file notes feeding time-recording and billing, or auto-classifies a matter for billing-rate selection. Supreme Court of Queensland Practice Direction 5 of 2025 already treats information input to a public generative AI tool as published to all the world; APP 1.8 layers an organisational disclosure obligation on top.",
                },
                {
                  label: "4.4 Gov-supply / supplier-risk SMBs",
                  body: "An agent that drafts a tender response, ranks supplier risk, or auto-classifies a Statement of Capability against a panel-vehicle requirement. For Defence-supplying firms, the DTA AI policy v2.0 phased rollout (15 June 2026 first mandatory, 15 December 2026 full) and DISP Essential Eight ML2 obligations sit alongside APP 1.8. Tender-prioritisation decisions are contractual-rights decisions in the APP 1.9 sense.",
                },
                {
                  label: "4.5 Fintech post-Series A",
                  body: "An agent that performs credit decisioning, monitors AML transactions for suspicious-matter reporting, or generates model-risk attestations under APRA CPS 230. AUSTRAC Tranche 2 (effective 1 July 2026) is outcomes-based and intersects APP 1.8: if the agent suppresses an alert, the firm has to disclose the kinds of personal information used and the kinds of decisions the system makes solely or substantially and directly.",
                },
              ].map((item, i) => (
                <div key={i} className="glass p-5 cyber-corners">
                  <h3 className="font-heading text-sm font-semibold mb-2">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-bold mb-4">
              Penalty structure
            </h2>
            <div className="glass p-6 cyber-corners neon-border mb-5">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-heading text-2xl font-bold gradient-text">A$50M</p>
                  <p className="text-muted-foreground text-xs font-mono-cyber mt-1">maximum penalty</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold gradient-text">3×</p>
                  <p className="text-muted-foreground text-xs font-mono-cyber mt-1">benefit derived</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold gradient-text">30%</p>
                  <p className="text-muted-foreground text-xs font-mono-cyber mt-1">of adjusted turnover</p>
                </div>
              </div>
              <p className="text-muted-foreground text-xs text-center mt-4 font-mono-cyber">
                Whichever is greater — Privacy Act 1988 (Cth) as amended by the Privacy Legislation Amendment (Enforcement and Other Measures) Act 2022
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Enforcement is no longer hypothetical. OAIC notified 1,113 data
              breaches across CY2024 — record year since the NDB scheme
              commenced in 2018, +25% YoY — and 532 in H1 2025, with health
              18%, finance 14%, and government 13% the top reporting sectors.
              The first civil penalty under the Privacy Act landed in October 2025
              — A$5.8M against Australian Clinical Labs over a 2022 breach
              affecting 223,000 individuals. The "we are too small to be
              enforced" assumption is no longer well-founded.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-bold mb-4">
              What "compliant" actually looks like
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              By 10 December 2026 an APP entity running AI in scope of APP 1.7
              needs five artefacts in its privacy register:
            </p>
            <div className="space-y-3">
              {[
                {
                  label: "Updated privacy policy with APP 1.8 statements",
                  body: "A new Automated decision-making section listing the kinds of personal information used as inputs, the kinds of decisions made solely by those programmes, and the kinds of decisions for which the programmes do something substantially and directly related. Categorical, not granular.",
                },
                {
                  label: "Internal register of automated decision systems",
                  body: "Working document maintained by the firm — each in-scope system listed with owner, vendor, hosting region, personal-information categories ingested, decision categories produced, human-review controls, audit-log retention, date of most-recent PIA.",
                },
                {
                  label: "Disclosure-on-request mechanism (APP 12 interaction)",
                  body: "Individuals already have the right under APP 12 to request access to their personal information. APP 1.8 disclosure means they will know which systems use their data; firms must answer the follow-up: 'show me what your AI knew about me when the decision was made.'",
                },
                {
                  label: "Privacy Impact Assessment for each in-scope system",
                  body: "ADM sits naturally inside the existing PIA process — programme logic, data quality, bias risk, human-review boundary. For SMBs the PIA also serves the cyber-insurance underwriter and the corporate-client vendor-risk auditor.",
                },
                {
                  label: "APP 8 cross-border treatment",
                  body: "APP 8 requires reasonable steps to ensure overseas recipients of personal information don't breach the APPs. AI vendors using non-AU infrastructure (US-region inference, EU-region data stores, offshore administrative access) trigger APP 8 documentation. AU-only delivery on AWS Sydney cuts inference-flow exposure to zero.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 glass p-4 cyber-corners">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-heading text-sm font-semibold mb-1">{item.label}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-bold mb-4">
              Five misconceptions that cost money
            </h2>
            <div className="space-y-3">
              {misconceptions.map((m, i) => (
                <div key={i} className="glass p-4 cyber-corners border border-yellow-500/15">
                  <div className="flex items-start gap-2 mb-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-yellow-500 mt-0.5 shrink-0" />
                    <p className="font-heading text-sm font-semibold text-yellow-400">
                      "{m.label}"
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-5.5">
                    {m.correction}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-bold mb-4">
              Timeline — working backwards from 10 December 2026
            </h2>
            <div className="space-y-3">
              {[
                { date: "31 August 2026", event: "Last realistic start for in-house build (3.5 months compliance work + 1-month legal review + 1-month board-paper cycle)." },
                { date: "12 September 2026", event: "Last realistic start for Aegilux Phase 1 Standard (45–60 days + buffer + internal review)." },
                { date: "15 October 2026", event: "Last realistic start for Phase 1 Compact (30 days + internal review)." },
                { date: "9 November 2026", event: "Last realistic start for Tier 0 ADM Readiness Pack (5–10 business days, artefact-only)." },
                { date: "10 December 2026", event: "APP 1.7–1.9 commences. Privacy policy reflects APP 1.8; register exists; PIAs on file." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-36 shrink-0 text-right">
                    <span className="font-mono-cyber text-xs text-primary">{item.date}</span>
                  </div>
                  <div className="w-px bg-primary/30 self-stretch mx-2" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-xs mt-5 font-mono-cyber leading-relaxed">
              Calendar arithmetic, not coercion. Buyers who haven't started by
              31 August 2026 are unlikely to make the deadline in-house — they
              will need a vendor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="glass p-8 cyber-corners neon-border text-center"
          >
            <h2 className="font-heading text-xl font-bold mb-3">
              Where does your firm sit against the 10 December deadline?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-lg mx-auto">
              Book a 20-min call. No pitch — compare notes on your AI
              deployment, your privacy register, and whether your current
              tools put you inside the regulator's expectations.
            </p>
            <Link
              to="/contact"
              className="glow-button inline-flex items-center justify-center gap-2 text-sm"
            >
              Book a 20-min call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
