import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

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
        <Link to="/" className="flex items-center gap-2 group" aria-label="Aegilux home">
          <img
            src="/aegilux-logo.svg?v=2"
            alt="Aegilux"
            className="w-8 h-8 group-hover:drop-shadow-[0_0_10px_hsl(var(--neon-blue)/0.9)] transition-all"
            width="32"
            height="32"
          />
          <span className="font-heading text-lg font-bold text-foreground">
            aegi<span className="text-primary neon-text">lux</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/cloud-security"
            className={`text-sm font-mono-cyber tracking-wider transition-colors ${
              isActive("/cloud-security")
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Cloud Security
          </Link>
          <Link
            to="/ai"
            className={`text-sm font-mono-cyber tracking-wider transition-colors ${
              isActive("/ai")
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            AI Chief of Staff
          </Link>
          <Link
            to="/about"
            className={`text-sm font-mono-cyber tracking-wider transition-colors ${
              isActive("/about")
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            About
          </Link>
          <Link
            to="/faq"
            className={`text-sm font-mono-cyber tracking-wider transition-colors ${
              isActive("/faq")
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            FAQ
          </Link>
          <Link to="/contact" className="glow-button text-sm py-2 px-6">
            Book a call
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
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
            <div className="section-container py-4 flex flex-col gap-3">
              {[
                { label: "Cloud Security", href: "/cloud-security" },
                { label: "AI Chief of Staff", href: "/ai" },
                { label: "About", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Privacy Act 2026", href: "/privacy-act-2026" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-2 font-mono-cyber tracking-wider transition-colors ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  &gt; {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="glow-button text-center text-sm py-3 mt-1"
              >
                Book a call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
