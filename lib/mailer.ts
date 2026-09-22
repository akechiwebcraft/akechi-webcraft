import nodemailer from "nodemailer";
import { SITE_CONFIG } from "@/lib/config";

export interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  challenge: string;
  source?: string;
  phone?: string;
  service?: string;
  timeline?: string;
  timestamp?: string;
  referrer?: string;
}

const SERVICE_LABELS: Record<string, string> = {
  "ai-machine-learning": "AI & Machine Learning",
  "full-stack-development": "Cloud & Full-Stack",
  "salesforce-development": "Salesforce Development",
  "sap-erp-systems": "SAP ERP Systems",
  "tinkering-lab-setup": "STEM & ATL Labs",
  "digital-marketing-seo": "Digital Marketing & SEO",
  other: "Other",
};

const TIMELINE_LABELS: Record<string, string> = {
  immediate: "Immediate (< 1 month)",
  planning: "Planning (1-3 months)",
  discovery: "Discovery (> 3 months)",
};

/**
 * Reads SMTP settings at call time rather than module load so a missing
 * config surfaces as a handled send failure instead of a build-time crash.
 */
function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  const port = Number(SMTP_PORT) || 465;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // 465 uses implicit TLS; 587 upgrades via STARTTLS.
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:8px 16px 8px 0;color:#64748B;font-size:13px;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:8px 0;color:#0F172A;font-size:14px;">${escapeHtml(value)}</td>
    </tr>`;
}

function buildHtml(data: ContactSubmission) {
  const submitted = data.timestamp
    ? new Date(data.timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    : new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#F8FBFD;padding:24px;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #D7E5EC;border-radius:12px;overflow:hidden;">
      <div style="background:#0078D4;padding:20px 24px;">
        <p style="margin:0;color:#ffffff;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">New website enquiry</p>
        <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;">${escapeHtml(data.name)} — ${escapeHtml(data.company)}</h1>
      </div>
      <div style="padding:24px;">
        <table style="width:100%;border-collapse:collapse;">
          ${row("Name", data.name)}
          ${row("Email", data.email)}
          ${row("Company", data.company)}
          ${row("Phone", data.phone)}
          ${row("Service", data.service ? SERVICE_LABELS[data.service] ?? data.service : undefined)}
          ${row("Timeline", data.timeline ? TIMELINE_LABELS[data.timeline] ?? data.timeline : undefined)}
          ${row("Heard via", data.source)}
          ${row("Referrer", data.referrer)}
          ${row("Submitted", submitted)}
        </table>

        <div style="margin-top:20px;padding-top:20px;border-top:1px solid #D7E5EC;">
          <p style="margin:0 0 8px;color:#64748B;font-size:13px;">Challenge</p>
          <p style="margin:0;color:#0F172A;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(data.challenge)}</p>
        </div>

        <a href="mailto:${escapeHtml(data.email)}"
           style="display:inline-block;margin-top:24px;background:#0078D4;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:8px;font-size:14px;font-weight:600;">
          Reply to ${escapeHtml(data.name)}
        </a>
      </div>
    </div>
  </div>`;
}

function buildText(data: ContactSubmission) {
  return [
    `New website enquiry`,
    ``,
    `Name:     ${data.name}`,
    `Email:    ${data.email}`,
    `Company:  ${data.company}`,
    data.phone ? `Phone:    ${data.phone}` : null,
    data.service ? `Service:  ${SERVICE_LABELS[data.service] ?? data.service}` : null,
    data.timeline ? `Timeline: ${TIMELINE_LABELS[data.timeline] ?? data.timeline}` : null,
    data.source ? `Heard via: ${data.source}` : null,
    ``,
    `Challenge:`,
    data.challenge,
  ]
    .filter(Boolean)
    .join("\n");
}

/**
 * Sends a contact submission to the company inbox.
 * Returns false (rather than throwing) so the caller can decide how to respond.
 */
export async function sendContactEmail(data: ContactSubmission): Promise<boolean> {
  const transporter = getTransporter();

  if (!transporter) {
    console.error("SMTP is not configured — set SMTP_HOST, SMTP_USER and SMTP_PASS.");
    return false;
  }

  try {
    await transporter.sendMail({
      from: `"Akechi Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || SITE_CONFIG.email,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `New enquiry — ${data.name} (${data.company})`,
      text: buildText(data),
      html: buildHtml(data),
    });
    return true;
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return false;
  }
}
