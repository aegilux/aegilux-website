import { motion } from "framer-motion";
import { FileWarning, ShieldOff, UserMinus } from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "Questionnaire Drag",
    desc: "Engineering loses 1–2 days every time a customer questionnaire, audit, or insurer renewal lands. Same SIG, same CAIQ, same E8 questions — rebuilt by hand each time.",
  },
  {
    icon: ShieldOff,
    title: "Evidence Scattered",
    desc: "Controls are mostly in place — MFA, patching, backups. But pulling evidence to prove it takes weeks per cycle. Insurers and enterprise buyers don't accept \"yes\" anymore.",
  },
  {
    icon: UserMinus,
    title: "$180K Hire You Can't Justify",
    desc: "Senior cloud security in AU sits at $180K+ loaded, with the role open 12 months on most boards. Hard math when 60–70% of the workload is evidence + reviews + audits.",
  },
];

const CsProblemSection = () => {
  return (
    <section id="problems" className="py-24 relative cyber-grid-fine">
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
            // Sound Familiar?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            You're Stuck Between{" "}
            <span className="gradient-text">Compliance and Capacity</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            You're 50–150 staff, AWS-heavy, selling to enterprise customers.
            Security controls aren't your problem. Proving them, on demand,
            without pulling engineers off shipping — that's your problem.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="service-card text-center group relative cyber-corners"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-destructive/10 text-destructive mb-4 group-hover:neon-glow transition-all border border-destructive/20">
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-sm font-semibold mb-2">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.desc}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                <span className="font-mono-cyber text-[10px] text-destructive/70 tracking-wider uppercase">Critical</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CsProblemSection };
export default CsProblemSection;
