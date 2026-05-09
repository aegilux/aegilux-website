import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 relative">
      <div className="cyber-divider absolute top-0 left-0 right-0" />

      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/aegilux-logo.svg"
                alt="Aegilux"
                className="w-7 h-7 drop-shadow-[0_0_6px_hsl(var(--neon-blue)/0.8)]"
                width="28"
                height="28"
              />
              <span className="font-heading text-lg font-bold">
                aegi<span className="text-primary neon-text">lux</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Managed cloud security and Essential Eight maturity for Australian
              SMBs running on AWS.
            </p>
          </div>

          <div>
            <h4 className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-4">
              // Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Problem", href: "problems" },
                { label: "How We Operate", href: "how-we-operate" },
                { label: "Services", href: "services" },
                { label: "Results", href: "results" },
                { label: "Pricing", href: "pricing" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={`#${l.href}`}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors font-mono-cyber"
                >
                  &gt; {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-4">
              // Contact
            </h4>
            <div className="flex flex-col gap-3 text-muted-foreground text-sm">
              <a href="mailto:hello@aegilux.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> hello@aegilux.com
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Suite 20.01, Level 20<br />68 Pitt Street, Sydney NSW 2000</span>
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-mono-cyber text-xs tracking-[0.3em] uppercase text-primary mb-4">
              // Get Started
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              $2,500 E8 Posture Snapshot, delivered in 5–7 days. Fully credited
              if you proceed.
            </p>
            <a href="#cta" className="glow-button text-sm py-2 px-5 inline-block">
              Book a Snapshot
            </a>
          </div>
        </div>

        <div className="cyber-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-mono-cyber">
            © {new Date().getFullYear()} Aegilux Pty Ltd // All rights reserved
          </p>
          <div className="flex gap-4">
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-primary text-xs transition-colors font-mono-cyber"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-muted-foreground hover:text-primary text-xs transition-colors font-mono-cyber"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
