import { motion } from "framer-motion";
import { Mail, ShieldCheck, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <Navbar />

      <main className="relative z-10 pt-24 pb-24">
        <div className="section-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block glass px-4 py-1.5 text-xs font-mono-cyber text-primary tracking-[0.3em] uppercase mb-5 neon-border">
              &lt; Contact /&gt;
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Book a 20-minute{" "}
              <span className="gradient-text neon-text">discovery call</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              No pitch — compare notes on where your firm sits against the 10
              December 2026 APP 1.7–1.9 deadline.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-xs font-mono-cyber tracking-wider text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-primary" />
              20 minutes
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              AWS ap-southeast-2 (Sydney)
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              Privacy-Act-by-design
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass p-8 cyber-corners neon-border mb-10"
          >
            <div className="flex items-center gap-2 mb-4 text-primary font-mono-cyber text-xs tracking-wider uppercase">
              <Clock className="w-3.5 h-3.5" />
              Booking calendar
            </div>

            {/* TODO: replace with Cal.com embed — add booking URL when provisioned (D1) */}
            <div className="border border-dashed border-border rounded-lg p-10 text-center bg-primary/5">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Booking calendar loading — if this doesn't appear, email{" "}
                <a
                  href="mailto:saba@aegilux.com"
                  className="text-primary hover:underline"
                >
                  saba@aegilux.com
                </a>{" "}
                directly.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div className="glass p-6 cyber-corners">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary neon-border">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold">AI Chief of Staff</p>
                  <p className="text-muted-foreground text-xs font-mono-cyber">Saba Jilani</p>
                </div>
              </div>
              <a
                href="mailto:saba@aegilux.com"
                className="text-primary hover:underline text-sm font-mono-cyber"
              >
                saba@aegilux.com
              </a>
            </div>

            <div className="glass p-6 cyber-corners">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary neon-border">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold">Cloud Security</p>
                  <p className="text-muted-foreground text-xs font-mono-cyber">Hassam Malik</p>
                </div>
              </div>
              <a
                href="mailto:hassam@aegilux.com.au"
                className="text-primary hover:underline text-sm font-mono-cyber"
              >
                hassam@aegilux.com.au
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-xs text-muted-foreground mt-10 font-mono-cyber leading-relaxed"
          >
            AU-only for regulated buyers. AWS ap-southeast-2 (Sydney) primary.
            Privacy Act 1988 (Cth) + Essential Eight ML2 aligned.
          </motion.p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
