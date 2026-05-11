import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 7, suffix: "yr", label: "Immutable audit trail", prefix: "" },
  { value: 90, suffix: "d", label: "Phase 1 max window", prefix: "" },
  { value: 2, suffix: "", label: "Sydney AWS region", prefix: "ap-se" },
  { value: 4, suffix: "", label: "Pillars per Phase 1", prefix: "" },
];

function AnimatedCounter({
  target,
  suffix,
  prefix,
}: {
  target: number;
  suffix: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    if (target === 0) {
      setCount(0);
      return;
    }
    let start = 0;
    const duration = 1500;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-heading text-4xl sm:text-5xl font-bold gradient-text neon-text">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const AiResultsSection = () => {
  return (
    <section id="results" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

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
            // What Ships With Every Phase 1
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            The compliance pack{" "}
            <span className="gradient-text">your security questionnaire needs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A buyer-tier comparison and the artefacts every Phase 1 customer
            takes home with the agent.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass text-center py-8 px-4 relative cyber-corners neon-border"
            >
              <AnimatedCounter target={s.value} suffix={s.suffix} prefix={s.prefix} />
              <p className="text-muted-foreground text-sm mt-2">{s.label}</p>
              <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Buyer-tier comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div
            className="glass p-8 relative cyber-corners"
            style={{ borderColor: "hsl(var(--muted-foreground) / 0.3)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-muted-foreground" />
              <h3 className="font-heading text-sm font-semibold text-muted-foreground">
                Big-4 consultancy
              </h3>
              <span className="font-mono-cyber text-[10px] text-muted-foreground/50 ml-auto">
                [SLOW]
              </span>
            </div>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60">·</span> 6–12 month
                engagement timeline
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60">·</span> Partner-led,
                manager-delivered
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60">·</span> Compliance
                pack delivered as a separate workstream
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60">·</span> Boutique
                price unavailable
              </li>
            </ul>
          </div>

          <div
            className="glass p-8 relative cyber-corners"
            style={{ borderColor: "hsl(0 84% 60% / 0.3)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
              <h3 className="font-heading text-sm font-semibold text-destructive">
                Offshore agency
              </h3>
              <span className="font-mono-cyber text-[10px] text-destructive/50 ml-auto">
                [REJECTED]
              </span>
            </div>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-destructive/60">✗</span> Cannot pass an AU
                regulated security questionnaire
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive/60">✗</span> No PIA, no APP
                1.7–1.9 disclosure pack, no ML2 gap
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive/60">✗</span> Data leaves AU by
                default
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive/60">✗</span> Cyber insurer
                renewal evidence absent
              </li>
            </ul>
          </div>

          <div className="glass p-8 neon-border relative cyber-corners">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <h3 className="font-heading text-sm font-semibold text-primary">
                Aegilux AI
              </h3>
              <span className="font-mono-cyber text-[10px] text-primary/50 ml-auto">
                [ONLINE]
              </span>
            </div>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span> 30–90 day Phase 1
                regardless of vertical
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span> Ships PIA + APP 1.7–1.9 +
                Essential Eight ML2 gap with the agent
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span> AU-only on AWS Sydney +
                7-year immutable audit trail
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span> Mandatory Phase 2 +
                monthly automated compliance report
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span> Customer-held KMS at
                Standard tier and up
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { AiResultsSection };
export default AiResultsSection;
