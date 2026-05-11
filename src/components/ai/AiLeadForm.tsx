import { useMemo, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const FALLBACK_MAILTO = "saba@aegilux.com";

const VERTICALS = [
  { value: "", label: "Select vertical" },
  { value: "financial-advice", label: "Financial advice / mortgage / insurance broking" },
  { value: "allied-health", label: "Allied health" },
  { value: "legal", label: "Mid-tier law" },
  { value: "gov-supply", label: "Gov-supply" },
  { value: "fintech", label: "Fintech post-Series A" },
  { value: "other", label: "Other regulated sector" },
];

const STAFF_SIZES = [
  { value: "", label: "Select staff size" },
  { value: "<50", label: "Under 50" },
  { value: "50-200", label: "50–200 (sweet spot)" },
  { value: "200-500", label: "200–500" },
  { value: "500+", label: "500+" },
];

type LeadFormState = {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  vertical: string;
  staffSize: string;
  message: string;
};

interface LeadFormProps {
  className?: string;
  showPhoneLink?: boolean;
}

const AiLeadForm = ({ className = "", showPhoneLink = true }: LeadFormProps) => {
  const [form, setForm] = useState<LeadFormState>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    vertical: "",
    staffSize: "",
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
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const pageUrl =
        typeof window !== "undefined" ? window.location.href : "";
      const referrer =
        typeof document !== "undefined" ? document.referrer : "";

      const annotatedMessage = [
        form.message,
        form.vertical ? `Vertical: ${form.vertical}` : "",
        form.staffSize ? `Staff size: ${form.staffSize}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      // Fallback to mailto when no API endpoint configured
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.companyName}\n\n${annotatedMessage}\n\n--\nUTM: ${JSON.stringify(utm)}\nReferrer: ${referrer}`,
      );
      const subject = encodeURIComponent("Aegilux AI — Discovery Call Request");
      window.location.href = `mailto:${FALLBACK_MAILTO}?subject=${subject}&body=${body}`;

      try {
        const anyWin = window as any;
        if (anyWin.fbq) anyWin.fbq("track", "Lead");
        if (anyWin.gtag) anyWin.gtag("event", "generate_lead");
      } catch {
        // ignore
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
        <p className="font-heading text-lg font-semibold">Request received.</p>
        <p className="text-muted-foreground text-sm mt-2">
          We will contact you to schedule a 60-minute discovery call.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${FALLBACK_MAILTO}?subject=Discovery%20call%20request`}
            className="glow-button inline-flex items-center justify-center gap-2 text-base"
          >
            Email us
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
            <label className="text-sm text-muted-foreground">Email</label>
            <Input
              value={form.email}
              onChange={onChange("email")}
              placeholder="you@firm.com.au"
              type="email"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Company</label>
            <Input
              value={form.companyName}
              onChange={onChange("companyName")}
              placeholder="e.g. Your Advisory Pty Ltd"
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
            <label className="text-sm text-muted-foreground">Vertical</label>
            <select
              value={form.vertical}
              onChange={onChange("vertical")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              {VERTICALS.map((v) => (
                <option key={v.value} value={v.value}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Staff size</label>
            <select
              value={form.staffSize}
              onChange={onChange("staffSize")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              {STAFF_SIZES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm text-muted-foreground">
              Workflow you want to embed an agent into (optional)
            </label>
            <Textarea
              value={form.message}
              onChange={onChange("message")}
              placeholder="e.g. SoA drafting, clinical-note dictation, tender response, inbox triage"
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
                Request a discovery call
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>
          {showPhoneLink && (
            <a
              href={`mailto:${FALLBACK_MAILTO}`}
              className="glow-button-secondary inline-flex items-center justify-center gap-2 text-base"
            >
              Or email saba@aegilux.com
            </a>
          )}
        </div>

        <p className="text-muted-foreground/60 text-xs mt-4">
          By submitting, you agree we can contact you about a discovery call.
          No spam.
        </p>
      </form>
    </div>
  );
};

export { AiLeadForm };
export default AiLeadForm;
