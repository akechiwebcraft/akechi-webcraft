import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";
import { clientKey, rateLimit } from "@/lib/rate-limit";

interface ContactPayload {
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
  /** Honeypot — must be empty. Real users never see this field. */
  website?: string;
}

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_BODY_BYTES = 16 * 1024;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: NextRequest) {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Payload too large" }, { status: 413 });
    }

    const limit = rateLimit(clientKey(request.headers), RATE_LIMIT, RATE_WINDOW_MS);
    if (!limit.allowed) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again shortly." },
        { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } }
      );
    }

    const body: ContactPayload = await request.json();

    // Honeypot: accept and discard so bots see a success and stop retrying.
    if (body.website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const challenge = body.challenge?.trim() ?? "";

    if (name.length < 2 || name.length > 100) {
      return badRequest("Name must be between 2 and 100 characters");
    }

    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      return badRequest("Valid email is required");
    }

    if (company.length < 2 || company.length > 100) {
      return badRequest("Company name must be between 2 and 100 characters");
    }

    if (challenge.length < 20 || challenge.length > 1000) {
      return badRequest("Please describe your challenge in 20 to 1000 characters");
    }

    const submission = {
      ...body,
      name,
      email,
      company,
      challenge,
    };

    const delivered = await sendContactEmail(submission);

    if (!delivered) {
      // Keep the submission recoverable from server logs if delivery fails.
      console.error("Contact submission could not be emailed:", {
        name,
        email,
        company,
        phone: body.phone,
        service: body.service,
        timeline: body.timeline,
        challenge,
        timestamp: body.timestamp,
      });

      return NextResponse.json(
        { error: "We couldn't send your message. Please email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );
  } catch {
    console.error("Contact form error");
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
