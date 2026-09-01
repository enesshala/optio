import {
  buildContactEmailHtml,
  buildContactSubject,
  type ContactEmailPayload,
} from "@/lib/emailTemplates";
import { getResendConfig } from "@/lib/env";
import { contactApiSchema } from "@/lib/validations/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const RATE_LIMIT_MS = 60_000;
const recentSubmissions = new Map<string, number>();

function isRateLimited(email: string): boolean {
  const key = email.toLowerCase();
  const last = recentSubmissions.get(key);
  const now = Date.now();
  if (last && now - last < RATE_LIMIT_MS) {
    return true;
  }
  recentSubmissions.set(key, now);
  return false;
}

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
    }

    const parsed = contactApiSchema.safeParse(body);
    if (!parsed.success) {
      const message =
        parsed.error.issues[0]?.message || "Please check your form fields.";
      return NextResponse.json({ error: message }, { status: 400 });
    }

    const data = parsed.data;

    if (isRateLimited(data.email)) {
      return NextResponse.json(
        { error: "Please wait a moment before submitting again." },
        { status: 429 }
      );
    }

    const payload: ContactEmailPayload = {
      type: data.type,
      name: data.name,
      email: data.email,
      message: data.message,
      phone: data.phone || undefined,
      package: data.package || undefined,
      source: data.source || undefined,
      experience:
        data.type === "bootcamp" ? data.experience || undefined : undefined,
    };

    const { apiKey, fromEmail, toEmail } = getResendConfig();
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `OPTIO <${fromEmail}>`,
      to: [toEmail],
      replyTo: payload.email,
      subject: buildContactSubject(payload),
      html: buildContactEmailHtml(payload),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
