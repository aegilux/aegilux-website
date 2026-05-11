import { motion } from "framer-motion";
import { Shield, MapPin, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trustItems = [
  "AU-owned, AU-delivered for regulated buyers",
  "AWS ap-southeast-2 (Sydney) primary — regulated workloads never leave AU",
  "Privacy Act 1988 (Cth) + Essential Eight Maturity Model 2 aligned",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      <Navbar />

      <main className="relative z-10 pt-24 pb-24">
        <div className="section-container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block glass px-4 py-1.5 text-xs font-mono-cyber text-primary tracking-[0.3em] uppercase mb-5 neon-border">
              &lt; About /&gt;
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              The team behind{" "}
              <span className="gradient-text neon-text">Aegilux</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              AU-owned boutique. Cloud security and AI Chief of Staff for AU
              regulated mid-market SMBs. Privacy-Act-by-design. Essential-Eight-aligned.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="service-card cyber-corners"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-heading text-xl font-bold">
                  HM
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold">Hassam Malik</h2>
                  <p className="text-primary text-sm font-mono-cyber tracking-wider">
                    Founder &amp; CEO, Aegilux
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Hassam Malik is the founder of Aegilux, an AU-owned boutique shipping
                cloud security and AI Chief of Staff services into AU regulated
                mid-market SMBs. Previously DevSecOps at WHG, and earlier at NSW
                Health, NDIA, Qantas, and S&P Global. Based in Sydney.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed italic text-muted-foreground/70">
                [TODO: Hassam — replace with your preferred 2-3 sentence bio]
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground/70 font-mono-cyber">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Sydney, NSW
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="service-card cyber-corners"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-heading text-xl font-bold">
                  SJ
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold">Saba Jilani</h2>
                  <p className="text-primary text-sm font-mono-cyber tracking-wider">
                    Founder, Aegilux AI
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Saba Jilani leads the AI Chief of Staff service line at Aegilux. She is
                the outreach lead and client-facing principal for the AI line, working
                directly with regulated mid-market SMBs across financial advice, allied
                health, and mid-tier law.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed italic text-muted-foreground/70">
                [TODO: Saba — add 2-3 sentences on professional background and why
                you co-founded the AI service line.]
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground/70 font-mono-cyber">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Sydney, NSW
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass p-8 cyber-corners neon-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary neon-border">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-mono-cyber text-xs tracking-[0.25em] uppercase text-primary">
                Why regulated buyers trust us
              </span>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground/70 text-xs font-mono-cyber">
              <Building2 className="w-3.5 h-3.5 text-primary" />
              <span>Suite 20.01, Level 20, 68 Pitt Street, Sydney NSW 2000</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a
                href="/contact"
                className="glow-button inline-flex items-center justify-center gap-2 text-sm py-3 px-8"
              >
                Book a 20-min discovery call
              </a>
              <a
                href="/ai"
                className="glass border border-border hover:border-primary/50 text-foreground inline-flex items-center justify-center gap-2 text-sm py-3 px-8 rounded-lg transition-all"
              >
                AI Chief of Staff
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
