import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Clock, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQSection } from "@/components/ui/FAQ";
import { contactFaqs } from "@/data/faqs";
import { site, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

const needs = [
  { value: "website-development", label: "Website development" },
  { value: "application-development", label: "Web / mobile application" },
  { value: "ui-ux-design", label: "UI/UX design" },
  { value: "custom-software", label: "Custom software" },
  { value: "business-automation", label: "Business automation" },
  { value: "maintenance-support", label: "Maintenance & support" },
  { value: "other", label: "Something else" },
];

const budgets = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000 – ₹6,00,000",
  "₹6,00,000+",
  "Not sure yet",
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
  budget: string;
  details: string;
};

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-electric-400/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-electric-500/10";

function Field({
  label,
  htmlFor,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
        {label} {required && <span className="text-electric-400">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  useSEO("Contact", "Let's build something meaningful. Send a project enquiry or chat with KYROCODEX on WhatsApp.");

  const [params] = useSearchParams();
  const initialNeed = params.get("need") ?? "";
  const plan = params.get("plan");

  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    need: needs.some((n) => n.value === initialNeed) ? initialNeed : plan ? "website-development" : "",
    budget: "",
    details: plan ? `I'm interested in the ${plan} plan.\n\n` : "",
  });
  const [submitted, setSubmitted] = useState<null | "whatsapp" | "email">(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const message = useMemo(() => {
    const needLabel = needs.find((n) => n.value === form.need)?.label ?? "—";
    return [
      `New project enquiry — ${site.name}`,
      ``,
      `Name: ${form.name || "—"}`,
      `Company: ${form.company || "—"}`,
      `Email: ${form.email || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Need: ${needLabel}`,
      `Budget: ${form.budget || "—"}`,
      ``,
      `Details:`,
      form.details || "—",
    ].join("\n");
  }, [form]);

  const validate = () => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email.";
    if (!form.need) next.need = "Select what you need.";
    if (form.details.trim().length < 10) next.details = "A little more detail helps us respond well.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const send = (channel: "whatsapp" | "email") => {
    if (!validate()) return;
    if (channel === "whatsapp") {
      window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    } else {
      const subject = encodeURIComponent(`Project enquiry from ${form.name}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
    }
    setSubmitted(channel);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send("whatsapp");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's build something <span className="text-gradient">meaningful.</span>
          </>
        }
        description="Tell us about your project. We reply within one business day with honest recommendations, a timeline and next steps — no pressure, no jargon."
        size="md"
        className="pb-8 sm:pb-12"
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Form */}
            <Reveal className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[2rem] glass p-6 sm:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-electric-500 to-violet-500 text-white shadow-glow">
                        <Check className="h-7 w-7" />
                      </span>
                      <h3 className="mt-8 font-display text-3xl font-semibold text-white">
                        {submitted === "whatsapp" ? "Opening WhatsApp…" : "Opening your email app…"}
                      </h3>
                      <p className="mt-4 max-w-md text-slate-400">
                        Your enquiry is pre-filled and ready to send. If nothing opened, use the buttons below.
                      </p>
                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button href={whatsappLink(message)} variant="whatsapp" icon={<MessageCircle />}>
                          Send on WhatsApp
                        </Button>
                        <Button
                          href={`mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry from ${form.name}`)}&body=${encodeURIComponent(message)}`}
                          variant="outline"
                          icon={<Mail />}
                          external={false}
                        >
                          Send by email
                        </Button>
                      </div>
                      <button type="button" onClick={() => setSubmitted(null)} className="mt-6 text-sm text-slate-500 hover:text-white">
                        Edit enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -12 }}
                      onSubmit={onSubmit}
                      noValidate
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="font-display text-2xl font-semibold text-white">Project enquiry</h2>
                        <p className="mt-1 text-sm text-slate-500">Fields marked * are required.</p>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Name" htmlFor="name" required>
                          <input id="name" value={form.name} onChange={update("name")} placeholder="Your full name" className={cn(inputClass, errors.name && "border-red-400/60")} autoComplete="name" />
                          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                        </Field>
                        <Field label="Company" htmlFor="company">
                          <input id="company" value={form.company} onChange={update("company")} placeholder="Company or brand" className={inputClass} autoComplete="organization" />
                        </Field>
                        <Field label="Email" htmlFor="email" required>
                          <input id="email" type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" className={cn(inputClass, errors.email && "border-red-400/60")} autoComplete="email" />
                          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                        </Field>
                        <Field label="Phone / WhatsApp" htmlFor="phone">
                          <input id="phone" type="tel" value={form.phone} onChange={update("phone")} placeholder="+91 …" className={inputClass} autoComplete="tel" />
                        </Field>
                        <Field label="What do you need?" htmlFor="need" required>
                          <select id="need" value={form.need} onChange={update("need")} className={cn(inputClass, "appearance-none", errors.need && "border-red-400/60", !form.need && "text-slate-500")}>
                            <option value="" disabled>
                              Select an option
                            </option>
                            {needs.map((n) => (
                              <option key={n.value} value={n.value} className="bg-ink-900 text-white">
                                {n.label}
                              </option>
                            ))}
                          </select>
                          {errors.need && <p className="mt-1.5 text-xs text-red-400">{errors.need}</p>}
                        </Field>
                        <Field label="Budget range" htmlFor="budget">
                          <select id="budget" value={form.budget} onChange={update("budget")} className={cn(inputClass, "appearance-none", !form.budget && "text-slate-500")}>
                            <option value="" disabled>
                              Select a range
                            </option>
                            {budgets.map((b) => (
                              <option key={b} value={b} className="bg-ink-900 text-white">
                                {b}
                              </option>
                            ))}
                          </select>
                        </Field>
                      </div>

                      <Field label="Project details" htmlFor="details" required>
                        <textarea
                          id="details"
                          rows={6}
                          value={form.details}
                          onChange={update("details")}
                          placeholder="What are you building? Who is it for? Any timeline, examples you like, or existing systems we should know about?"
                          className={cn(inputClass, "resize-y", errors.details && "border-red-400/60")}
                        />
                        {errors.details && <p className="mt-1.5 text-xs text-red-400">{errors.details}</p>}
                      </Field>

                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Button type="submit" size="lg" icon={<Send />}>
                          Send enquiry
                        </Button>
                        <Button type="button" variant="ghost" size="lg" icon={<Mail />} onClick={() => send("email")}>
                          Send by email instead
                        </Button>
                      </div>
                      <p className="text-xs leading-relaxed text-slate-500">
                        Submitting opens WhatsApp (or your email app) with your enquiry pre-filled — so we get it instantly and
                        you keep a copy. We never share your details.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>

            {/* Sidebar */}
            <div className="space-y-4 lg:col-span-5">
              <Reveal delay={0.1}>
                <a
                  href={whatsappLink("Hi KYROCODEX team, I'd like to discuss a project with you.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-3xl border border-[#25D366]/25 bg-[#25D366]/[0.06] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/50"
                >
                  <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-ink-950 shadow-[0_12px_30px_-10px_rgba(37,211,102,0.8)]">
                    <MessageCircle className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#25D366]">Fastest reply</div>
                    <div className="mt-1 font-display text-lg font-semibold text-white">Chat on WhatsApp</div>
                    <div className="text-sm text-slate-400">{site.phoneDisplay}</div>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {[
                    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
                    { icon: MapPin, label: "Location", value: site.location },
                    { icon: Clock, label: "Business hours", value: site.hours },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-4 rounded-3xl glass p-6">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-electric-300 shadow-glow">
                        <c.icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="mt-1 block font-medium text-white hover:text-electric-300">
                            {c.value}
                          </a>
                        ) : (
                          <div className="mt-1 font-medium text-white">{c.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {site.mapEmbedUrl && (
                <Reveal delay={0.2}>
                  <div className="overflow-hidden rounded-3xl glass">
                    <iframe
                      title="KYROCODEX location"
                      src={site.mapEmbedUrl}
                      className="h-64 w-full grayscale invert-[0.9] hue-rotate-180 contrast-[0.9]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </Reveal>
              )}

              <Reveal delay={0.25}>
                <div className="rounded-3xl border border-dashed border-white/10 p-6 text-sm leading-relaxed text-slate-500">
                  <span className="text-slate-300">What happens next?</span> We review your enquiry, reply with initial
                  thoughts, and schedule a free 30-minute discovery call. You'll receive a written proposal within a few
                  days of that call.
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <div className="border-t border-white/6 bg-ink-900/40">
        <FAQSection items={contactFaqs} title="Before you reach out." description="A few things people usually ask before getting in touch." />
      </div>
    </>
  );
}
