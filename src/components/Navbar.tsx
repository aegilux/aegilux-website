import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "#problems" },
  { label: "How We Operate", href: "#how-we-operate" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <Shield className="w-7 h-7 text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--neon-blue)/0.9)] transition-all" />
          <span className="font-heading text-lg font-bold text-foreground">
            aegi<span className="text-primary neon-text">lux</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono-cyber tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a href="#cta" className="glow-button text-sm py-2 px-6">
            Book a Snapshot
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border"
          >
            <div className="section-container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 font-mono-cyber tracking-wider"
                >
                  &gt; {link.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setMobileOpen(false)} className="glow-button text-center text-sm py-3">
                Book a Snapshot
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
