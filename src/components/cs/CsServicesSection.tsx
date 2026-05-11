import { motion } from "framer-motion";
import {
  Activity,
  FileCheck2,
  Lock,
  Bug,
  AlertTriangle,
  ScrollText,
  Server,
  Workflow,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Cloud Posture Management",
    desc: "Continuous AWS posture scanning (Prowler) against CIS + Essential Eight. Misconfigurations surfaced, prioritised, remediated. Drift detected within hours.",
    tag: "CSPM",
  },
  {
    icon: FileCheck2,
    title: "E8 Maturity Tracking",
    desc: "Monthly evidence packages mapped to ASD Essential Eight strategies. ML0 → ML1 → ML2 progress visible to your board, insurer, and customers — without engineering overhead.",
    tag: "EVIDENCE",
  },
  {
    icon: Lock,
    title: "Identity & Access",
    desc: "Phishing-resistant MFA enforcement (FIDO2/passkeys), IAM privilege reviews, service account audit. Just-in-time elevation replacing standing admin (Fortress tier).",
    tag: "IDENTITY",
  },
  {
    icon: Bug,
    title: "SIEM & Detection",
    desc: "Wazuh deployed inside your AWS account. Logs collected, correlations tuned, alerts triaged. Detection engineering tailored to your environment, not generic.",
    tag: "SIEM",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    desc: "Documented IR process with AU escalation. P1 auto-containment runs 24/7 (isolate EC2, revoke IAM, block IPs); analyst-driven response on coverage hours.",
    tag: "IR",
  },
  {
    icon: ScrollText,
    title: "Compliance Reporting",
    desc: "Audit-ready reports your insurer, customer, and board accept. SIG, CAIQ, ISO 27001 control mapping reusable across questionnaires.",
    tag: "AUDIT",
  },
  {
    icon: Server,
    title: "AWS Landing Zone",
    desc: "Multi-account architecture, SCPs, centralised logging, network segmentation. Terraform-provisioned, version-controlled, handed over with documentation.",
    tag: "LANDING_ZONE",
  },
  {
    icon: Workflow,
    title: "Workload & Container Scanning",
    desc: "Trivy integration for IaC, container, and secrets scanning in your CI/CD. Vulnerabilities flagged before they ship.",
    tag: "WORKLOADS",
  },
  {
    icon: ClipboardCheck,
    title: "vCISO Hours (Fortress)",
    desc: "4 hrs/month of senior security advisory. Board reporting, vendor review, security roadmap. For regulated businesses or government supply chain.",
    tag: "VCISO",
  },
];

const CsServicesSection = () => {
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
            // Capabilities
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Outcomes,{" "}
            <span className="gradient-text">Not Tools.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We bring the platform, the runbooks, the analysts, and the evidence.
            You keep the data. Open-source under the hood — no vendor lock-in,
            no black box.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="service-card flex gap-4 items-start cyber-corners group"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary neon-border group-hover:neon-glow transition-all">
                <s.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-heading text-sm font-semibold">
                    {s.title}
                  </h3>
                  <span className="font-mono-cyber text-[10px] text-primary/50 tracking-wider hidden sm:block">[{s.tag}]</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CsServicesSection };
export default CsServicesSection;
