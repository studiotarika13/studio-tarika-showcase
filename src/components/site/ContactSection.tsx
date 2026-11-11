import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useId, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";
import { CONTACT, buildEnquiryMessage, mailtoUrl, whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const fieldClass =
  "peer w-full border-0 border-b border-on-ink/25 bg-transparent px-0 pb-3 pt-2 text-lg text-on-ink placeholder:text-on-ink/35 transition-colors focus:border-brass focus:outline-none focus-visible:outline-none";

export function ContactSection({ defaultService, index = "06" }: { defaultService?: string | undefined; index?: string }) {
  const uid = useId();
  const initial = SERVICES.find((s) => s.slug === defaultService)?.title ?? "";
  const [form, setForm] = useState({ name: "", business: "", service: initial, brief: "" });
  const [errors, setErrors] = useState<{ name?: string; brief?: string }>({});
  const [readyUrl, setReadyUrl] = useState<string | null>(null);

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setReadyUrl(null);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (form.brief.trim().length < 10) next.brief = "A sentence or two about the project helps.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const url = whatsappUrl(buildEnquiryMessage(form));
    setReadyUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ink text-on-ink">
      <div className="container-studio grid gap-16 py-24 md:py-36 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow flex items-center gap-3 text-on-ink-muted">
            <span className="text-brass">({index})</span>
            <span aria-hidden className="h-px w-10 bg-current opacity-40" />
            Contact
          </p>
          <h2 id="contact-title" className="display-lg mt-6">
            Ready for your <em className="text-brass">next chapter?</em>
            <span className="block">Start a conversation.</span>
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-on-ink-muted">
            Tell us a little about your brand and what you have in mind. Your message goes straight to Bhavishya.
          </p>

          <dl className="mt-12 divide-y divide-on-ink/15 border-y border-on-ink/15">
            {[
              { k: "Email", v: CONTACT.email, href: mailtoUrl() },
              { k: "Phone", v: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
              { k: "WhatsApp", v: "Message directly", href: whatsappUrl(), external: true },
            ].map((row) => (
              <div key={row.k} className="grid grid-cols-[6.5rem_minmax(0,1fr)] items-baseline gap-4 py-5">
                <dt className="eyebrow text-on-ink-muted">{row.k}</dt>
                <dd className="min-w-0">
                  <a
                    href={row.href}
                    {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group inline-flex max-w-full items-center gap-2 font-display text-xl md:text-2xl"
                  >
                    <span className="link-line truncate">{row.v}</span>
                    <ArrowUpRight className="size-4 shrink-0 text-brass transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-5 lg:col-start-8" delay={150}>
          <form onSubmit={onSubmit} noValidate className="border border-on-ink/15 bg-ink-soft p-6 md:p-10">
            <p className="font-display text-2xl">Write your enquiry</p>
            <p className="mt-2 text-sm leading-relaxed text-on-ink-muted">
              We'll turn this into a WhatsApp message for you to review and send.
            </p>

            <div className="mt-8 space-y-7">
              <Field id={`${uid}-name`} label="Your name" error={errors.name}>
                <input
                  id={`${uid}-name`}
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${uid}-name-err` : undefined}
                  className={fieldClass}
                  placeholder="Full name"
                />
              </Field>
              <Field id={`${uid}-business`} label="Business or brand">
                <input
                  id={`${uid}-business`}
                  name="business"
                  autoComplete="organization"
                  value={form.business}
                  onChange={update("business")}
                  className={fieldClass}
                  placeholder="Optional"
                />
              </Field>
              <Field id={`${uid}-service`} label="Service of interest">
                <select
                  id={`${uid}-service`}
                  name="service"
                  value={form.service}
                  onChange={update("service")}
                  className={cn(fieldClass, "cursor-pointer appearance-none bg-transparent [&>option]:bg-ink")}
                >
                  <option value="">Not sure yet — let's talk</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id={`${uid}-brief`} label="Brief" error={errors.brief}>
                <textarea
                  id={`${uid}-brief`}
                  name="brief"
                  rows={4}
                  value={form.brief}
                  onChange={update("brief")}
                  aria-invalid={Boolean(errors.brief)}
                  aria-describedby={errors.brief ? `${uid}-brief-err` : undefined}
                  className={cn(fieldClass, "resize-none")}
                  placeholder="What are you hoping to create, and by when?"
                />
              </Field>
            </div>

            <Button type="submit" variant="ivory" size="pill" className="mt-10 w-full">
              <MessageCircle aria-hidden /> Continue on WhatsApp
            </Button>

            <div aria-live="polite" className="mt-5 text-sm leading-relaxed text-on-ink-muted">
              {readyUrl ? (
                <p>
                  WhatsApp should now be open with your message ready. Nothing is sent until you press send there.{" "}
                  <a href={readyUrl} target="_blank" rel="noopener noreferrer" className="link-line-static text-on-ink">
                    Didn't open? Continue on WhatsApp
                  </a>
                </p>
              ) : (
                <p>Opens WhatsApp in a new tab. Prefer email? Write to {CONTACT.email}.</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow text-on-ink-muted">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-2 text-sm text-brass">
          {error}
        </p>
      )}
    </div>
  );
}
