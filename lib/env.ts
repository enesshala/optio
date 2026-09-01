function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getResendConfig() {
  return {
    apiKey: requireEnv("RESEND_API_KEY"),
    fromEmail: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
    toEmail: process.env.CONTACT_TO_EMAIL || "enesishala@gmail.com",
  };
}
