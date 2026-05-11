import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const generalFAQs = [
  {
    id: "q1",
    question: "What does Aegilux actually build?",
    answer:
      "An AI Chief of Staff plus 1–2 vertical specialist sub-agents and 1–2 cross-vertical operational sub-agents, embedded in your operations on AU-hosted infrastructure. The Chief of Staff is the master agent — orchestrates the sub-agents, holds your firm's persistent memory, and communicates via Telegram, Slack, email, web chat, or Vapi voice. Vertical sub-agents are picked at scoping: SoA Drafter or File-Note Compliance for financial advice; Clinical Note Drafter or NDIS Plan-Period for allied health; File-Note + Privileged-AI Sandbox for law; Tender Drafter for gov-supply. Cross-vertical sub-agents handle outreach, inbox triage, meeting prep, content, reporting, calendar, document search, and compliance attestation. The compliance pack — PIA, APP 1.7–1.9 disclosure, Essential Eight ML2 gap, ADM register — ships inside Phase 1 alongside the agent. AU-only on AWS ap-southeast-2 (Sydney).",
  },
  {
    id: "q2",
    question: "How is this different from Microsoft 365 Copilot or Salesforce Agentforce?",
    answer:
      "Copilot and Agentforce cover 60–70% of in-suite productivity inside their own data planes. They stop where your specialist workflow starts. Copilot drafts in Outlook and summarises in Teams — it does not reach Xero, Xplan, AdviserLogic, Cliniko, LEAP, or your CRM, and it ships no PIA, no APP 1.7–1.9 disclosure register, and no Essential Eight ML2 gap analysis specific to AI deployment. Microsoft default audit retention sits at 90–365 days by tier — short of the 7-year retention the Corporations Act expects. Agentforce is locked to the Salesforce data plane. We orchestrate Copilot and Agentforce as tools inside the Chief of Staff, build the custom vertical agent your principal needs, and ship the compliance pack the security questionnaire demands. Copilot covers 60–70%; the 30–40% that is compliance-blocking is what we ship.",
  },
  {
    id: "q3",
    question: "Why is the monthly retainer mandatory?",
    answer:
      "Phase 2 is liability insurance with a paper trail, not break-fix support. Agents drift — Anthropic upgrades the model, source-system APIs change, your operations evolve, the regulator publishes new guidance. Without monthly evals, drift monitoring, security patching, quarterly governance review, quarterly Privacy Act attestation, and the monthly automated compliance report, the agent decays from asset to liability inside 90 days and the December 2026 disclosure goes stale. Australian cyber insurers in 2026 deny claims where attested controls were not operational at incident time — the monthly compliance report is your renewal-line evidence chain. Day 90 conversion checkpoint is contractually built into the Phase 1 SOW, 12-month minimum, 90-day notice after that.",
  },
  {
    id: "q4",
    question: "Can we cancel the retainer?",
    answer:
      "Yes — at any point after the 12-month minimum, with 90 days written notice. Inside the minimum the retainer holds; the structure exists because regulated buyers cannot accept agent drift, stale PIAs, or unpatched infrastructure inside the first year. At end-of-notice the agent is decommissioned: you keep your data export (conversation history, agent memory, audit logs, monthly compliance reports). You do not keep the system — the Anthropic API key, Composio entity, AWS account, Langfuse instance, and infrastructure all belong to Aegilux. This is a managed service, not a software licence. Cancellation language sits in the Phase 1 SOW you sign before Phase 2 starts, so exit terms are visible from day one.",
  },
  {
    id: "q5",
    question: "Can we take the source code?",
    answer:
      "No. Aegilux is a managed service, not a software vendor — the agent runs on Aegilux-managed infrastructure inside an AWS account in our organisation. You get full operational access: Telegram bot, Slack, email integration, read-only Langfuse dashboard for your IT lead, audit-log query interface, health dashboard, monthly reporting email, quarterly attestation pack — and at any cancellation you keep a complete data export. Source-code-takers are an explicit ICP disqualifier. The trade-off is real: managed service means we own model upgrades, security patching, drift monitoring, and Privacy Act attestation continuously. If keeping IP in-house is non-negotiable, hire two engineers (AI engineer + compliance lead — A$405–520K loaded Year 1 per Robert Half 2026) and we are not your fit.",
  },
  {
    id: "q6",
    question: "What about Privacy Act ADM transparency obligations under APP 1.7–1.9?",
    answer:
      "APP 1.7–1.9 takes force 10 December 2026 under the Privacy and Other Legislation Amendment Act 2024. The OAIC APP 1 Guidelines October 2025 v1.2 require a public APP Privacy Policy that identifies the kinds of personal information used in automated decisions significantly affecting individuals. Penalty regime is up to A$50M, 3× benefit derived, or 30% of adjusted turnover for serious interference; A$3.3M for general contraventions. Every Phase 1 ships the PIA (15–25 pages), the APP 1.7–1.9 disclosure register populated against your actual workflows, the Essential Eight ML2 gap analysis, and the ADM register template. Phase 2 refreshes them quarterly via the Compliance Attestation sub-agent. The deadline is the wedge — not the pitch.",
  },
  {
    id: "q7",
    question: "Are you SOC 2 / ISO 27001 / IRAP certified?",
    answer:
      "No, and Aegilux does not claim certifications it does not hold. Every Phase 1 is aligned with Essential Eight Maturity Model 2 — phishing-resistant MFA, 48-hour critical patching, 12-month privileged-access revalidation, application allow-listing, daily backups with monthly restore drills. Pre-Series-B SOC 2 Type II is on the Year-2 roadmap if customer demand pulls it forward; ISO 27001 follows. Aegilux claims AU residency on AWS ap-southeast-2, OFFICIAL-grade controls, customer-held KMS at Standard+, Silo multi-tenant isolation, and a 7-year immutable audit trail (S3 Object Lock Compliance mode). Aligned with is not the same as certified to — and pretending otherwise on a regulated buyer's questionnaire is grounds for rejection.",
  },
  {
    id: "q8",
    question: "What if the agent makes a mistake?",
    answer:
      "The MSA caps our indemnity at engagement value plus a defined PI interaction, with an AI-incident runbook aligned to your dealer-group, practice, or firm complaint procedure. Every prompt, tool call, output, and metadata captures to Langfuse and is retained on AWS S3 ap-southeast-2 with Object Lock Compliance mode for 7 years — typically more audit trail than a professional file note carries today. Human-in-the-loop is the architecture default for any consequential action: the agent drafts, your AFSL-licensed adviser, AHPRA-registered clinician, or admitted lawyer reviews and signs. Privacy lawyer review of every Phase 1 SOW, MSA, and Phase 2 retainer is event-driven — booked the moment the first paid prospect crosses from interested to ready-to-sign.",
  },
  {
    id: "q9",
    question: "Why pay you 5× what an offshore agency charges?",
    answer:
      "Two numbers, then a third. (1) Privacy Act exposure: APP 1.7–1.9 lands 10 December 2026 with up to A$50M / 3× benefit / 30% of adjusted turnover. An offshore agency that discloses offshore delivery in your supplier-risk questionnaire kills 30–40% of regulated deals before procurement looks at the build. Without an AI-specific PIA and ADM disclosure register, your firm cannot deploy any AI tool inside the regulator's expectations. (2) Cyber-insurance: Australian insurers in 2025–2026 are denying claims where attested controls were not operational at incident time and adding 15–30% premium loadings on firms without ML2 evidence. The monthly compliance report ships directly to your underwriter — fine-avoidance plus insurability. (3) An offshore A$5–10K build rarely passes the security questionnaire. Aegilux is AU-only on AWS Sydney with customer-held KMS at Standard+ — passing the questionnaire is the first bill of materials, not the upsell.",
  },
  {
    id: "q10",
    question: "We have engineering — why not just build it ourselves?",
    answer:
      "Concede the build; the job we sell is governance, evidence, and attestation your engineers do not want. Robert Half 2026 puts senior AI engineer Sydney loaded cost at A$225–280K Year 1; add a compliance lead at A$180–240K and that is A$405–520K for the two-head minimum to ship a custom agent plus the AI-specific compliance pack. Six to twelve months ramp before the first agent ships — past the 10 December 2026 deadline. Your engineer does not write a PIA, draft an APP 1.7–1.9 disclosure register, or run an Essential Eight ML2 gap analysis specific to AI deployment without the second hire. Two years of Aegilux costs A$97–247K — about a quarter of the Year-1 two-head cost — and produces a compounding compliance evidence chain the in-house route cannot match.",
  },
  {
    id: "q11",
    question: "How do you handle our customer data?",
    answer:
      "Per-customer single-tenant isolation on AWS ap-southeast-2 (Sydney) with customer-held encryption keys at Standard+. Each customer gets a dedicated AWS account inside Aegilux's organisation (or a dedicated VPC in a shared account), one EC2 instance, one Postgres + pgvector RDS database, one Langfuse project, and one Composio entity — fully isolated, no customer-to-customer crossover, ever. Encryption at rest with customer-held KMS via OIDC against your KMS at Standard and Premium tiers — encryption keys never leave your control, and at cancellation you revoke our access in minutes. Anthropic enterprise terms — no training on your prompts, no logging beyond your own Langfuse instance. Pakistan team services non-regulated work only and is disclosed openly in your security questionnaire; for regulated buyers Pakistan delivery is disabled by default.",
  },
  {
    id: "q12",
    question: "How quickly can we go live?",
    answer:
      "Phase 1 ships in 30–90 days depending on tier, with the 50% deposit at SOW signature unblocking work. Phase 1 Compact (A$25K, 30 days, Chief of Staff plus 1 vertical sub-agent) suits sub-100 staff buyers with a single workflow target. Phase 1 Standard (A$35K, 45–60 days, Chief of Staff plus 1 vertical sub-agent plus 1 cross-vertical sub-agent plus full PIA + APP + ML2) is the default. Phase 1 Embedded (A$55K, 60–90 days, Chief of Staff plus 2 vertical sub-agents plus 1–2 cross-vertical sub-agents plus customer-held KMS plus named-attribution rights) suits 150–200 staff firms with multiple practice groups. Discovery + PIA at Tier 1 (A$5K, 5 business days) gives you the PIA, APP 1.7–1.9 register draft, ML2 gap, agent roadmap, and a fixed-price Phase 1 quote, with A$2,500 credited if you sign Phase 1 within 45 days.",
  },
];

const verticalFAQs = [
  {
    id: "q13",
    question: "Financial advice: can your AI sign a Statement of Advice?",
    answer:
      "No — and any vendor that says yes is wrong on the regulation. ASIC RG 255 requires a suitably qualified individual to review and sign every piece of digital advice; RG 175 (BID) and RG 90 (SoA disclosure) make the licensee responsible for the content. The SoA Drafter sub-agent drafts under 2 hours what currently takes 4–8 senior hours at A$200–400/hr — pulls fact-find from Xplan or AdviserLogic, drafts against Padua or Midwinter's engine, posts the draft for your AFSL-licensed adviser to review, edit, and sign. Every prompt, tool call, output, edit, and signed-off version captures to the 7-year immutable audit trail under Corporations Act §286 (S3 Object Lock Compliance mode). Sign-off authority stays with the licensed adviser.",
  },
  {
    id: "q14",
    question: "Financial advice: what is the AFCA exposure if the AI gets it wrong?",
    answer:
      "The MSA caps our indemnity at engagement value plus a defined PI interaction, with an AI-incident runbook aligned to your dealer-group complaint escalation. Every action sits in Langfuse with the responsible adviser's name, approval gesture, raw recording, AI draft, adviser edits, and signed-off output preserved — typically more audit trail than most adviser file notes carry today. ASIC INFO 250/256 acknowledge digital advice; RG 255 sets the suitably-qualified-individual review obligation; Corporations Act §286 mandates the 7-year audit trail (why Aegilux ships S3 Object Lock Compliance mode retention independent of Anthropic's default 30–180-day window). If your AFSL is under active ASIC enforcement, EU, or banning order, Aegilux is not your vendor.",
  },
  {
    id: "q15",
    question: "Financial advice: does this replace Xplan / AdviserLogic / Padua?",
    answer:
      "No. The agent augments your licensee stack via MCP — pulls fact-find from Xplan or AdviserLogic, drafts the SoA against Padua or Midwinter's engine, posts back to the file. Your advisers keep the interface they already use; the agent reads the system, drafts the document, writes back, and logs every action. Zero PMS migration, zero training on a new system. Xplan dominates the 50–200 staff licensee tier; AdviserLogic sits mid-market. Your fee earners do not change tools — they receive cleaner drafts faster, signed inside the system the licensee already owns.",
  },
  {
    id: "q16",
    question: "Allied health: can your AI sign a clinical note?",
    answer:
      "No. AHPRA August 2024 holds the practitioner accountable for clinical decisions and documentation — not the tool. ACSQHC August 2025 AI Clinical Use Guide v1.0 warns about automation bias (errors of commission and omission) and frames the before-during-after sign-off discipline. The Clinical Note Drafter sub-agent ingests the session recording (with consent), drafts the note in your firm's house style, and posts the draft for the AHPRA-registered clinician to review, edit, and sign in your practice management system. Recording, AI draft, clinician edits, and signed-off note preserved in the 7-year immutable audit trail — diff visible end-to-end. Sign-off authority is non-negotiable.",
  },
  {
    id: "q17",
    question: "Allied health: has AHPRA approved this?",
    answer:
      "AHPRA does not approve products — it sets practitioner obligations, and the agent is designed against those obligations. The PIA maps every workflow to AHPRA's August 2024 AI guidance and the ACSQHC August 2025 AI Clinical Use Guide v1.0 — defensible in a notification interview. The Clinical Note Drafter, NDIS Plan-Period Agent, Audit-Pack Generator, and Recall + Reschedule Agent each carry an explicit human-in-the-loop sign-off step and a record of the clinician's named approval. NDIS Quality and Safeguards Commission Q1 2025 enforcement was 6,841 activities and 60 banning orders (214% YoY) — the audit-pack rebuild that used to take 2–5 days per clinician becomes hours when the 7-year immutable trail is the source of record.",
  },
  {
    id: "q18",
    question: "Allied health: our clients are vulnerable — how is their privacy protected?",
    answer:
      "AU-only delivery on AWS ap-southeast-2 (Sydney) with customer-held KMS at Standard tier and up — Pakistan delivery disabled by default for regulated work, disclosed openly in your security questionnaire. APP 11 audit log on every read, write, and export of personal information. Notifiable Data Breaches scheme path written into the MSA. Customer-held KMS via OIDC against your KMS means encryption keys never leave your control — at cancellation you revoke our access in minutes. Body photos, mental-health notes, NDIS participant records, and minor records are tagged sensitive at ingestion and retained on the 7-year immutable trail (S3 Object Lock Compliance mode). OAIC NDB H1 2025 had health at 18% of breaches — the audit chain ships purpose-built for that exposure.",
  },
  {
    id: "q22",
    question: "Discovery + PIA at A$5K vs ADM Readiness Pack at A$7.5K — which do we choose?",
    answer:
      "Choose Tier 1 Discovery + PIA (A$5K, 5 business days) if you have decided to build the agent and want a fixed-price Phase 1 quote inside a week. It includes the PIA, the APP 1.7–1.9 disclosure register draft, the Essential Eight ML2 gap, the agent roadmap, and recorded discovery sessions, with A$2,500 credited toward Phase 1 if you sign within 45 days. Choose Tier 0 ADM Readiness Pack (A$7,500 fixed, 5–10 business days) if you have not yet decided whether to deploy an AI agent but the 10 December 2026 deadline forces you to file the disclosure pack regardless. It is artefact-only — PIA + APP 1.7–1.9 disclosure draft + ML2 gap report + ADM register template + 1-page board briefing — with 100% credit toward Phase 1 if you sign Phase 1 within 30 days. The decision rule: build-decided → Tier 1; deadline-pressured-but-undecided → Tier 0.",
  },
  {
    id: "q23",
    question: "Day 90 conversion checkpoint — what happens if we want to step down to Essential tier?",
    answer:
      "You can step down to Essential at the Day 90 checkpoint without penalty — the checkpoint is built into the Phase 1 SOW exactly to give you a contractually clean choice between tiers. At Day 90 of Phase 1 you either confirm a Phase 2 tier (Essential A$3K/mo, Standard A$5K/mo, or Premium A$8K/mo) or have explicitly declined, in which case Phase 2 still kicks in at Essential by default. You cannot exit Phase 2 at Day 90 — only after the 12-month minimum, with 90 days notice. Stepping down from Standard to Essential means you keep monthly evals, quarterly governance review, quarterly Privacy Act attestation, security patching, and the monthly automated compliance report — but lose drift-monitoring depth, customer-held KMS at OIDC, and active improvement hours.",
  },
  {
    id: "q27",
    question: "When does our cyber-insurance renewal come up — does this help?",
    answer:
      "If your renewal is in the next 6 months, this is the forcing function — and yes. Australian cyber insurers in 2025–2026 are actively asking AI-controls questions on renewal questionnaires, denying claims where attested controls were not operational at incident time, and pricing 15–30% premium loadings on firms without ML2 evidence and an AI-specific PIA. Phase 2 ships the monthly automated compliance report as PDF + JSON: agent uptime, drift incidents (caught and resolved), security patch cadence, MFA compliance, audit-log integrity check, ML2 control status, PIA refresh status. Generated automatically by the Compliance Attestation sub-agent and delivered with your permission directly to your underwriter at agreed cadence. OAIC NDB H1 2025 sectoral data shows finance at 14%, health at 18%, legal services adjacent — your premium is being repriced regardless.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      <Navbar />

      <main className="relative z-10 pt-24 pb-24">
        <div className="section-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block glass px-4 py-1.5 text-xs font-mono-cyber text-primary tracking-[0.3em] uppercase mb-5 neon-border">
              &lt; FAQ /&gt;
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Frequently asked{" "}
              <span className="gradient-text neon-text">questions</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Straight answers on offer, architecture, compliance, and
              pricing. Informational only — consult a qualified AU privacy
              lawyer for your firm's circumstances.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-6">
              // General
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {generalFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="glass cyber-corners border border-border px-5"
                >
                  <AccordionTrigger className="text-left font-heading text-sm font-semibold hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-6">
              // Vertical-specific &amp; process
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {verticalFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="glass cyber-corners border border-border px-5"
                >
                  <AccordionTrigger className="text-left font-heading text-sm font-semibold hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm mb-6 font-mono-cyber">
              Question not covered here?
            </p>
            <Link
              to="/contact"
              className="glow-button inline-flex items-center justify-center gap-2 text-sm"
            >
              Book a 20-min discovery call
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
