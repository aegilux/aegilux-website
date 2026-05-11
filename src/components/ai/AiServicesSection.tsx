import { motion } from "framer-motion";
import {
  FileText,
  Stethoscope,
  Gavel,
  Building2,
  Shield,
  Send,
  Inbox,
  PencilLine,
  CalendarClock,
  Search,
  BarChart3,
  Briefcase,
} from "lucide-react";

const verticalSpecialists = [
  {
    icon: FileText,
    title: "SoA Drafter + File-Note Compliance",
    vertical: "Financial advice / mortgage / insurance broking",
    tag: "ADVICE",
  },
  {
    icon: Stethoscope,
    title: "Clinical-Note + NDIS Plan-Period",
    vertical: "Allied health",
    tag: "ALLIED_HEALTH",
  },
  {
    icon: Gavel,
    title: "File-Note + Privileged-AI Sandbox",
    vertical: "Mid-tier law",
    tag: "LEGAL",
  },
  {
    icon: Building2,
    title: "Tender Drafter + Capability-Statement Assembler",
    vertical: "Gov-supply",
    tag: "GOV_SUPPLY",
  },
  {
    icon: Shield,
    title: "ADM Disclosure Register + CPS 230 Evidence Pack",
    vertical: "Fintech post-Series A",
    tag: "FINTECH",
  },
];

const operationalSubAgents = [
  { icon: Send, title: "Outreach", desc: "Drafts cold and warm messages per signal contract; queues for approval.", tag: "OUTREACH" },
  { icon: Inbox, title: "Inbound Triage", desc: "Categorises leads and enquiries, routes, drafts replies.", tag: "TRIAGE" },
  { icon: PencilLine, title: "Content Drafter", desc: "LinkedIn posts, newsletters, blog drafts, case studies in your voice.", tag: "CONTENT" },
  { icon: Inbox, title: "Inbox Triage", desc: "Email overload management with reply drafts.", tag: "INBOX" },
  { icon: CalendarClock, title: "Meeting Prep + Calendar", desc: "Pulls context, drafts agendas, finds slots, handles reschedules.", tag: "CALENDAR" },
  { icon: Search, title: "Document Search + Research", desc: "Across your stack — Drive, M365, DMS, CRM — plus competitor / market / prospect research.", tag: "SEARCH" },
  { icon: BarChart3, title: "Reporting", desc: "Weekly status, KPI rollups, board-paper drafts.", tag: "REPORT" },
  { icon: Briefcase, title: "HR / Finance / Vendor / Compliance", desc: "Operational sub-agents from the library, orchestrated by the Chief of Staff.", tag: "OPS" },
];

const AiServicesSection = () => {
  return (
    <section id="services" className="py-24 relative cyber-grid-fine">
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
            // What Ships
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Vertical specialists.{" "}
            <span className="gradient-text">Cross-vertical operations.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every Phase 1 ships one master Chief of Staff plus 1–2 vertical
            specialist sub-agents from the library, optionally augmented by
            cross-vertical operational sub-agents.
          </p>
        </motion.div>

        {/* Vertical specialists */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="font-mono-cyber text-xs tracking-[0.25em] uppercase text-primary">
              Vertical specialist sub-agents
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {verticalSpecialists.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="service-card flex gap-4 items-start cyber-corners group"
              >
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary neon-border group-hover:neon-glow transition-all">
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono-cyber text-[10px] text-primary/70 tracking-wider uppercase">
                      {s.vertical}
                    </span>
                    <span className="font-mono-cyber text-[10px] text-primary/50 tracking-wider hidden sm:block">
                      [{s.tag}]
                    </span>
                  </div>
                  <h3 className="font-heading text-sm font-semibold leading-snug">
                    {s.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cross-vertical operational sub-agents */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-secondary/40" />
            <span className="font-mono-cyber text-xs tracking-[0.25em] uppercase text-secondary">
              Cross-vertical operational sub-agents
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-secondary/40" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {operationalSubAgents.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="service-card flex gap-3 items-start cyber-corners group"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/30">
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-heading text-sm font-semibold">
                      {s.title}
                    </h3>
                    <span className="font-mono-cyber text-[10px] text-secondary/60 tracking-wider hidden md:block">
                      [{s.tag}]
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { AiServicesSection };
export default AiServicesSection;
