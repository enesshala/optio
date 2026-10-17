export type ContactEmailPayload = {
  type: "home" | "bootcamp" | "inquiry";
  name: string;
  email: string;
  message?: string;
  phone?: string;
  experience?: string;
  package?: string;
  service?: string;
  budget?: string;
  source?: string;
};

function row(label: string, value: string) {
  return `<tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#374151;vertical-align:top;">${label}</td><td style="padding:8px 0;color:#111827;">${value}</td></tr>`;
}

function emailTitle(type: ContactEmailPayload["type"]) {
  if (type === "bootcamp") return "New OPTIO Bootcamp 2026 application";
  if (type === "inquiry") return "New OPTIO project inquiry (quick form)";
  return "New OPTIO project inquiry";
}

export function buildContactEmailHtml(payload: ContactEmailPayload): string {
  const title = emailTitle(payload.type);

  const rows = [
    row("Name", escapeHtml(payload.name)),
    row("Email", escapeHtml(payload.email)),
    ...(payload.phone ? [row("Phone", escapeHtml(payload.phone))] : []),
    ...(payload.service ? [row("Service", escapeHtml(payload.service))] : []),
    ...(payload.budget ? [row("Budget", escapeHtml(payload.budget))] : []),
    ...(payload.package ? [row("Package", escapeHtml(payload.package))] : []),
    ...(payload.experience
      ? [row("Background", escapeHtml(payload.experience))]
      : []),
    ...(payload.message
      ? [row("Message", escapeHtml(payload.message).replace(/\n/g, "<br />"))]
      : []),
    ...(payload.source ? [row("Source", escapeHtml(payload.source))] : []),
    row("Submitted", new Date().toISOString()),
  ].join("");

  return `
    <!DOCTYPE html>
    <html>
      <body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111827;">
        <h2 style="color:#059669;margin:0 0 16px;">${title}</h2>
        <table style="border-collapse:collapse;">${rows}</table>
      </body>
    </html>
  `;
}

export function buildContactSubject(payload: ContactEmailPayload): string {
  if (payload.type === "bootcamp") {
    return `[OPTIO Bootcamp 2026] Application from ${payload.name}`;
  }
  if (payload.type === "inquiry") {
    return `[OPTIO] ${payload.service ?? "Project"} inquiry from ${payload.name}`;
  }
  if (payload.package) {
    return `[OPTIO] ${payload.package} package inquiry from ${payload.name}`;
  }
  return `[OPTIO] New project inquiry from ${payload.name}`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
