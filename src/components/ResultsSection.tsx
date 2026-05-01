import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 24, suffix: "h", label: "Questionnaire Turnaround" },
  { value: 14, suffix: " wk", label: "Snapshot → Steady-State" },
  { value: 0, suffix: "", label: "Data Leaves Your Account" },
  { value: 8, suffix: "/5", label: "SOC + 24/7 Auto-Containment" },
];

function AnimatedCounter({ target, suffix, prefix }: { target: number; suffix: string; prefix?: string }) {
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
      {prefix}{count}
      {suffix}
    </span>
  );
}

const ResultsSection = () => {
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
            // The Difference
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            From{" "}
            <span className="gradient-text">Scrambling to Shipping</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Stop pulling engineers off product to answer the same security
            questions. Start replying in 24 hours from a maintained evidence
            base.
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          <div className="glass p-8 relative cyber-corners" style={{ borderColor: 'hsl(0 84% 60% / 0.3)' }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
              <h3 className="font-heading text-sm font-semibold text-destructive">
                Without Aegilux
              </h3>
              <span className="font-mono-cyber text-[10px] text-destructive/50 ml-auto">[OFFLINE]</span>
            </div>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2"><span className="text-destructive/60">✗</span> Engineering loses 1–2 days per questionnaire</li>
              <li className="flex items-start gap-2"><span className="text-destructive/60">✗</span> Insurer renewals turn into 3-week scrambles</li>
              <li className="flex items-start gap-2"><span className="text-destructive/60">✗</span> Enterprise deals stall on vendor security reviews</li>
              <li className="flex items-start gap-2"><span className="text-destructive/60">✗</span> E8 maturity unknown to board / unprovable to insurer</li>
              <li className="flex items-start gap-2"><span className="text-destructive/60">✗</span> $180K+ open headcount you can't fill</li>
            </ul>
          </div>
          <div className="glass p-8 neon-border relative cyber-corners">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <h3 className="font-heading text-sm font-semibold text-primary">
                With Aegilux
              </h3>
              <span className="font-mono-cyber text-[10px] text-primary/50 ml-auto">[ONLINE]</span>
            </div>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> Questionnaires answered in 24 hours from a maintained evidence base</li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> Monthly E8 maturity reports your board, insurer, and customers accept</li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> AWS posture continuously scanned — drift caught in hours</li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> 24/7 automated containment + 8/5 SOC (Sentinel) or 24/7 human SOC (Fortress)</li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span> Under a quarter of the cost of a senior security hire</li>
            </ul>
          </div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto glass-strong p-8 cyber-corners neon-border"
        >
          <p className="font-heading text-lg sm:text-xl text-foreground leading-relaxed mb-4">
            "Aegilux's Sentinel automation gave us instant visibility and
            audit-ready reports from day one. Their team seamlessly deployed
            our AWS Landing Zone — we finally have total confidence in our
            digital posture."
          </p>
          <footer className="font-mono-cyber text-xs text-primary tracking-wider uppercase">
            — Faizan, COO · 150-person AU SaaS
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default ResultsSection;
