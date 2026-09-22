"use client";

import { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/animations";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

interface FormData {
  name: string;
  email: string;
  company: string;
  challenge: string;
  source: string;
  phone: string;
  service: string;
  timeline: string;
}

type RequiredField = "name" | "email" | "company" | "challenge";
type FormErrors = Partial<Record<RequiredField, string>>;
type FormStatus = "idle" | "loading" | "success" | "error";

const REQUIRED_FIELDS: RequiredField[] = ["name", "email", "company", "challenge"];
const CHALLENGE_MIN = 20;
const CHALLENGE_MAX = 1000;

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  company: "",
  challenge: "",
  source: "",
  phone: "",
  service: "",
  timeline: "",
};

const inputClass =
  "w-full rounded-md border bg-tint px-4 text-base text-ink outline-none transition-colors placeholder:text-subtle focus:border-primary focus:ring-[3px] focus:ring-primary/15";

export default function ContactForm({ compact }: { compact?: boolean } = {}) {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [touched, setTouched] = useState<Partial<Record<RequiredField, boolean>>>({});
  const formRef = useRef<HTMLFormElement>(null);
  // Bots fill every field they find; humans never see this one.
  const honeypotRef = useRef<HTMLInputElement>(null);

  const validate = (field: RequiredField, value: string): string | undefined => {
    switch (field) {
      case "name":
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        if (value.length > 100) return "Name must be under 100 characters";
        return undefined;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email";
        return undefined;
      case "company":
        if (value.trim().length < 2) return "Company name must be at least 2 characters";
        if (value.length > 100) return "Company name must be under 100 characters";
        return undefined;
      case "challenge":
        if (value.trim().length < CHALLENGE_MIN)
          return `Please describe your challenge in at least ${CHALLENGE_MIN} characters`;
        if (value.length > CHALLENGE_MAX)
          return `Please keep your message under ${CHALLENGE_MAX} characters`;
        return undefined;
    }
  };

  const handleBlur = (field: RequiredField) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validate(field, form[field]) }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (REQUIRED_FIELDS.includes(field as RequiredField) && touched[field as RequiredField]) {
      setErrors((prev) => ({ ...prev, [field]: validate(field as RequiredField, value) }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const nextErrors: FormErrors = {};
    for (const field of REQUIRED_FIELDS) {
      const error = validate(field, form[field]);
      if (error) nextErrors[field] = error;
    }

    setErrors(nextErrors);
    setTouched({ name: true, email: true, company: true, challenge: true });

    const firstInvalid = REQUIRED_FIELDS.find((field) => nextErrors[field]);
    if (firstInvalid) {
      // Move focus so keyboard and screen reader users land on the problem
      formRef.current
        ?.querySelector<HTMLElement>(`#contact-${firstInvalid}`)
        ?.focus();
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          website: honeypotRef.current?.value ?? "",
          timestamp: new Date().toISOString(),
          referrer: document.referrer,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm(EMPTY_FORM);
        setTouched({});
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  /** Wires label, control, error text, and hint together for assistive tech. */
  const fieldProps = (field: RequiredField, hintId?: string) => {
    const invalid = Boolean(errors[field] && touched[field]);
    const describedBy = [invalid ? `${field}-error` : null, hintId].filter(Boolean).join(" ");

    return {
      id: `contact-${field}`,
      "aria-required": true,
      "aria-invalid": invalid,
      "aria-describedby": describedBy || undefined,
      className: `${inputClass} ${invalid ? "border-danger" : "border-line"}`,
      onBlur: () => handleBlur(field),
    };
  };

  const fieldError = (field: RequiredField) =>
    errors[field] && touched[field] ? (
      <p id={`${field}-error`} role="alert" className="text-note text-danger">
        {errors[field]}
      </p>
    ) : null;

  const labelClass = "text-sm font-medium text-ink";
  const challengeCount = form.challenge.trim().length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
    >
      {/* Success State */}
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          role="status"
          aria-live="polite"
          className="flex flex-col items-center gap-4 rounded-lg border border-success bg-white p-10 text-center"
        >
          <CheckCircle size={48} className="text-success" aria-hidden="true" />
          <h3 className="text-2xl text-ink">Thank you</h3>
          <p className="text-base text-muted">
            We&apos;ll be in touch within one working day.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 cursor-pointer border-none bg-transparent text-sm font-medium text-primary-dark underline"
          >
            Send another message
          </button>
        </motion.div>
      )}

      {/* Form */}
      {status !== "success" && (
        <form
          ref={formRef}
          suppressHydrationWarning
          onSubmit={handleSubmit}
          noValidate
          className={`flex flex-col gap-5 rounded-lg border border-line bg-white ${
            compact ? "p-6" : "p-6 sm:p-10"
          }`}
        >
          {/* Honeypot — hidden from users, visible to bots */}
          <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0">
            <label htmlFor="contact-website">Leave this field empty</label>
            <input
              ref={honeypotRef}
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              defaultValue=""
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className={labelClass}>
              Full name <span aria-hidden="true">*</span>
            </label>
            <input
              suppressHydrationWarning
              type="text"
              autoComplete="name"
              placeholder="Priya Sharma"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              {...fieldProps("name")}
              style={{ height: 48 }}
            />
            {fieldError("name")}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className={labelClass}>
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              suppressHydrationWarning
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              {...fieldProps("email")}
              style={{ height: 48 }}
            />
            {fieldError("email")}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-company" className={labelClass}>
              Company or organisation <span aria-hidden="true">*</span>
            </label>
            <input
              suppressHydrationWarning
              type="text"
              autoComplete="organization"
              placeholder="Company, school, or department"
              value={form.company}
              onChange={(e) => handleChange("company", e.target.value)}
              {...fieldProps("company", "company-hint")}
              style={{ height: 48 }}
            />
            <p id="company-hint" className="text-note text-muted">
              Independent? Enter your own name.
            </p>
            {fieldError("company")}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-phone" className={labelClass}>
              Phone number <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              suppressHydrationWarning
              id="contact-phone"
              type="tel"
              autoComplete="tel"
              placeholder={SITE_CONFIG.phone1}
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={`${inputClass} border-line`}
              style={{ height: 48 }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-service" className={labelClass}>
              Project track <span className="font-normal text-muted">(optional)</span>
            </label>
            <select
              suppressHydrationWarning
              id="contact-service"
              value={form.service}
              onChange={(e) => handleChange("service", e.target.value)}
              className={`${inputClass} cursor-pointer appearance-none border-line bg-[right_16px_center] bg-no-repeat ${
                form.service ? "text-ink" : "text-subtle"
              }`}
              style={{
                height: 48,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23475569' d='M2 4l4 4 4-4'/%3E%3C/svg%3E")`,
              }}
            >
              <option value="">Select a category</option>
              <option value="ai-machine-learning">AI &amp; Machine Learning</option>
              <option value="full-stack-development">Cloud &amp; Full-Stack</option>
              <option value="salesforce-development">Salesforce Development</option>
              <option value="sap-erp-systems">SAP ERP Systems</option>
              <option value="tinkering-lab-setup">STEM &amp; ATL Labs</option>
              <option value="digital-marketing-seo">Digital Marketing &amp; SEO</option>
              <option value="other">Other</option>
            </select>
          </div>

          <fieldset className="m-0 flex flex-col gap-3 border-none p-0">
            <legend className={labelClass}>
              Timeline <span className="font-normal text-muted">(optional)</span>
            </legend>
            <div className="flex flex-wrap gap-4">
              {[
                ["immediate", "Immediate (under 1 month)"],
                ["planning", "Planning (1–3 months)"],
                ["discovery", "Discovery (3+ months)"],
              ].map(([value, label]) => (
                <label key={value} className="flex cursor-pointer items-center gap-2">
                  <input
                    suppressHydrationWarning
                    type="radio"
                    name="timeline"
                    value={value}
                    checked={form.timeline === value}
                    onChange={(e) => handleChange("timeline", e.target.value)}
                    className="accent-primary"
                  />
                  <span className="text-sm text-prose">{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Challenge */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-challenge" className={labelClass}>
              Your challenge <span aria-hidden="true">*</span>
            </label>
            <textarea
              suppressHydrationWarning
              rows={4}
              maxLength={CHALLENGE_MAX}
              placeholder="What are you trying to solve, and what have you tried so far?"
              value={form.challenge}
              onChange={(e) => handleChange("challenge", e.target.value)}
              {...fieldProps("challenge", "challenge-hint")}
              style={{ minHeight: 100, paddingBlock: 12, resize: "vertical" }}
            />
            <p id="challenge-hint" className="text-note text-muted">
              {challengeCount < CHALLENGE_MIN
                ? `At least ${CHALLENGE_MIN} characters — ${CHALLENGE_MIN - challengeCount} to go.`
                : `${challengeCount} of ${CHALLENGE_MAX} characters.`}
            </p>
            {fieldError("challenge")}
          </div>

          {/* How did you hear */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-source" className={labelClass}>
              How did you hear about us?{" "}
              <span className="font-normal text-muted">(optional)</span>
            </label>
            <select
              suppressHydrationWarning
              id="contact-source"
              value={form.source}
              onChange={(e) => handleChange("source", e.target.value)}
              className={`${inputClass} cursor-pointer appearance-none border-line bg-[right_16px_center] bg-no-repeat ${
                form.source ? "text-ink" : "text-subtle"
              }`}
              style={{
                height: 48,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23475569' d='M2 4l4 4 4-4'/%3E%3C/svg%3E")`,
              }}
            >
              <option value="">Select an option</option>
              <option value="website">Website</option>
              <option value="referral">Referral</option>
              <option value="media">Media</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submission error */}
          {status === "error" && (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-md border border-danger-line bg-danger-soft p-4"
            >
              <AlertCircle size={18} className="mt-0.5 shrink-0 text-danger" aria-hidden="true" />
              <p className="text-sm text-danger">
                Something went wrong. Please try again or email us at{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="font-semibold underline">
                  {SITE_CONFIG.email}
                </a>
              </p>
            </div>
          )}

          {/* Submit */}
          <button
            suppressHydrationWarning
            type="submit"
            disabled={status === "loading"}
            className={`flex h-12 w-full items-center justify-center gap-2 rounded-md border-none text-base font-semibold text-white transition-colors ${
              status === "loading"
                ? "cursor-not-allowed bg-subtle"
                : "cursor-pointer bg-primary hover:bg-primary-dark"
            }`}
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                <Send size={16} aria-hidden="true" />
                Send message
              </>
            )}
          </button>

          <p className="text-note leading-6 text-muted">
            We use your details only to respond to this enquiry. See our{" "}
            <a href="/privacy" className="text-primary-dark underline">
              privacy policy
            </a>
            .
          </p>
        </form>
      )}
    </motion.div>
  );
}
