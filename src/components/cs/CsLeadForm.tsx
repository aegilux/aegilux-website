import { useMemo, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

// TODO: wire to a form backend (Web3Forms / Formspree / Cloudflare Workers).
// Set VITE_FORM_ENDPOINT to a webhook that accepts POST JSON.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || "";
const FALLBACK_MAILTO = "hassam@aegilux.com.au";

type LeadFormState = {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  awsAccounts: string;
  message: string;
};

interface LeadFormProps {
  className?: string;
  showPhoneLink?: boolean;
}

const CsLeadForm = ({ className = "", showPhoneLink = false }: LeadFormProps) => {
  const [form, setForm] = useState<LeadFormState>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    awsAccounts: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const utm = useMemo(() => {
    if (typeof window === "undefined") return {} as Record<string, string>;
    const p = new URLSearchParams(window.location.search);
    const get = (k: string) => p.get(k) || "";
    return {
      utmSource: get("utm_source"),
      utmMedium: get("utm_medium"),
      utmCampaign: get("utm_campaign"),
      utmContent: get("utm_content"),
      utmTerm: get("utm_term"),
    };
  }, []);

  const onChange =
    (key: keyof LeadFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const pageUrl = typeof window !== "undefined" ? window.location.href : "";
      const referrer = typeof document !== "undefined" ? document.referrer : "";

      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, pageUrl, referrer, ...utm }),
        });
        if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      } else {
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.companyName}\nAWS accounts: ${form.awsAccounts}\n\nMessage:\n${form.message}\n\n--\nUTM: ${JSON.stringify(utm)}\nReferrer: ${referrer}`,
        );
        const subject = encodeURIComponent("Aegilux — E8 Snapshot Enquiry");
        window.location.href = `mailto:${FALLBACK_MAILTO}?subject=${subject}&body=${body}`;
      }

      try {
        const anyWin = window as any;
        if (anyWin.gtag) anyWin.gtag("event", "generate_lead");
      } catch {
        /* ignore */
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className={`glass p-8 rounded-lg text-left neon-border ${className}`}>
        <p className="font-heading text-lg font-semibold">Got it.</p>
        <p className="text-muted-foreground text-sm mt-2">
          We'll be in touch within one business day to scope your E8 Posture
          Snapshot.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${FALLBACK_MAILTO}?subject=Aegilux%20E8%20Snapshot%20Enquiry`}
            className="glow-button inline-flex items-center justify-center gap-2 text-base"
          >
            Email us directly
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={submit}
        className="glass p-6 sm:p-8 rounded-lg text-left neon-border"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Name</label>
            <Input
              value={form.name}
              onChange={onChange("name")}
              placeholder="Your name"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Work email</label>
            <Input
              value={form.email}
              onChange={onChange("email")}
              placeholder="you@company.com"
              type="email"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Phone</label>
            <Input
              value={form.phone}
              onChange={onChange("phone")}
              placeholder="04xx xxx xxx"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Company</label>
            <Input
              value={form.companyName}
              onChange={onChange("companyName")}
              placeholder="e.g. Acme SaaS"
              required
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm text-muted-foreground">
              AWS accounts (rough)
            </label>
            <Input
              value={form.awsAccounts}
              onChange={onChange("awsAccounts")}
              placeholder="e.g. 1 prod + 1 staging"
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm text-muted-foreground">
              What's prompting this? (optional)
            </label>
            <Textarea
              value={form.message}
              onChange={onChange("message")}
              placeholder="e.g. Customer security questionnaire due in 4 weeks. Insurer asking for E8 evidence."
            />
          </div>
        </div>

        {error ? (
          <p className="text-sm text-destructive mt-4">{error}</p>
        ) : null}

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            type="submit"
            className="glow-button inline-flex items-center gap-2 text-base"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Book a Snapshot
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>
          {showPhoneLink && (
            <a
              href={`mailto:${FALLBACK_MAILTO}`}
              className="glow-button-secondary inline-flex items-center justify-center gap-2 text-base"
            >
              Or email hassam@aegilux.com.au
            </a>
          )}
        </div>

        <p className="text-muted-foreground/60 text-xs mt-4">
          By submitting, you agree we can contact you about a Snapshot scope.
          No marketing emails.
        </p>
      </form>
    </div>
  );
};

export { CsLeadForm };
export default CsLeadForm;
