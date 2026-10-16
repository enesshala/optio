"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const DEFAULT_SERVICES = [
  "Custom Platforms",
  "Automation & AI",
  "E-commerce",
  "Digital Growth",
  "Product & Web Apps",
  "Integrations & APIs",
];

const DEFAULT_BUDGETS = [
  "Under €5k",
  "€5k – €15k",
  "€15k – €40k",
  "€40k+",
  "Not sure yet",
];

type InquiryLocale = {
  title?: string;
  heading?: string;
  subheading?: string;
  stepContact?: string;
  stepService?: string;
  stepBudget?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  phoneLabel?: string;
  phonePlaceholder?: string;
  next?: string;
  back?: string;
  finish?: string;
  services?: string[];
  budgets?: string[];
};

const InquirySteps = ({
  locale,
  embedded = false,
}: {
  locale?: InquiryLocale;
  embedded?: boolean;
}) => {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");

  const services = locale?.services?.length ? locale.services : DEFAULT_SERVICES;
  const budgets = locale?.budgets?.length ? locale.budgets : DEFAULT_BUDGETS;

  const steps = useMemo(
    () => [
      locale?.stepContact ?? "Contact",
      locale?.stepService ?? "Service",
      locale?.stepBudget ?? "Budget",
    ],
    [locale?.stepBudget, locale?.stepContact, locale?.stepService],
  );

  const canNext =
    step === 0
      ? name.trim().length >= 2 && email.includes("@")
      : step === 1
        ? Boolean(service)
        : Boolean(budget);

  const goContact = () => {
    const summary = [
      name.trim() && `Name: ${name.trim()}`,
      email.trim() && `Email: ${email.trim()}`,
      phone.trim() && `Phone: ${phone.trim()}`,
      service && `Service: ${service}`,
      budget && `Budget: ${budget}`,
    ]
      .filter(Boolean)
      .join(" · ");

    const params = new URLSearchParams();
    if (service) params.set("package", service);
    if (summary) params.set("inquiry", summary);
    const qs = params.toString();
    router.push(`${qs ? `?${qs}` : ""}#Contact`, { scroll: true });
  };

  return (
    <div className={cn(!embedded && "mx-auto max-w-[480px] px-5 sm:px-8")}>
      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-12 -z-10 bg-[radial-gradient(closest-side,rgb(16_185_129/0.28),transparent)]"
        />
        <div className="rounded-[30px] bg-white/40 p-1.5 shadow-[0_2px_4px_rgb(10_10_11/0.04),0_40px_100px_-30px_rgb(5_150_105/0.45)] ring-1 ring-white/70 backdrop-blur-xl dark:bg-zinc-900/50 dark:shadow-[0_2px_4px_rgb(0_0_0/0.2),0_40px_100px_-30px_rgb(16_185_129/0.35)] dark:ring-white/10">
          <div className="relative min-w-0 rounded-[24px] bg-white p-4 shadow-[0_1px_2px_rgb(9_9_11/0.04)] min-[375px]:p-5 sm:p-6 xl:p-8 dark:bg-zinc-950 dark:shadow-none">
            <span
              aria-hidden
              className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent"
            />

            <h2 className="sr-only">
              {locale?.title ?? "Start a project inquiry"}
            </h2>

            <ol className="flex items-center">
              {steps.map((label, i) => (
                <li
                  key={label}
                  className={cn(
                    "flex items-center",
                    i < steps.length - 1 ? "flex-1" : "flex-none",
                  )}
                  aria-current={i === step ? "step" : undefined}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={cn(
                        "grid size-7 place-items-center rounded-full text-[12px] font-semibold tabular-nums transition-[background-color,color,box-shadow]",
                        i < step
                          ? "bg-emerald-500 text-white"
                          : i === step
                            ? "bg-emerald-500 text-white shadow-[0_0_0_4px_rgb(16_185_129/0.15)]"
                            : "bg-white text-zinc-500 shadow-[0_0_0_1px_rgb(9_9_11/0.1)] dark:bg-zinc-900 dark:text-zinc-400",
                      )}
                    >
                      {i < step ? <Check className="size-3.5" /> : i + 1}
                    </span>
                    <span
                      className={cn(
                        "text-[13px] font-medium transition-colors",
                        i === step
                          ? "text-zinc-900 dark:text-zinc-100"
                          : "text-zinc-500",
                        i > 0 && "hidden xl:inline",
                      )}
                    >
                      {label}
                    </span>
                  </span>
                  {i < steps.length - 1 ? (
                    <span
                      aria-hidden
                      className="relative mx-3 h-px flex-1 overflow-hidden bg-zinc-950/10 dark:bg-white/10"
                    >
                      <span
                        className={cn(
                          "absolute inset-0 origin-left bg-emerald-500 transition-transform duration-500",
                          i < step ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>

            <div className="mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {step === 0 ? (
                    <div className="space-y-4">
                      <div>
                        <p className="text-[17px] font-semibold tracking-[-0.02em] text-zinc-950 dark:text-zinc-50">
                          {locale?.heading ?? "How can we reach you?"}
                        </p>
                        <p className="mt-1.5 text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {locale?.subheading ??
                            "Your contact details first — project details come next."}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiry-name">
                          {locale?.nameLabel ?? "Name"}
                        </Label>
                        <Input
                          id="inquiry-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={locale?.namePlaceholder ?? "Your name"}
                          className="h-11 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiry-email">
                          {locale?.emailLabel ?? "Email"}
                        </Label>
                        <Input
                          id="inquiry-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={
                            locale?.emailPlaceholder ?? "you@company.com"
                          }
                          className="h-11 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiry-phone">
                          {locale?.phoneLabel ?? "Phone"}
                        </Label>
                        <Input
                          id="inquiry-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={
                            locale?.phonePlaceholder ?? "+383 …"
                          }
                          className="h-11 rounded-xl"
                        />
                      </div>
                    </div>
                  ) : null}

                  {step === 1 ? (
                    <div className="grid gap-2">
                      {services.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setService(item)}
                          className={cn(
                            "cursor-pointer rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors",
                            service === item
                              ? "border-emerald-500 bg-emerald-50 text-emerald-900 dark:border-emerald-400 dark:bg-emerald-500/10 dark:text-emerald-200"
                              : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-200",
                          )}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  ) : null}

                  {step === 2 ? (
                    <div className="grid gap-2">
                      {budgets.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setBudget(item)}
                          className={cn(
                            "cursor-pointer rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors",
                            budget === item
                              ? "border-emerald-500 bg-emerald-50 text-emerald-900 dark:border-emerald-400 dark:bg-emerald-500/10 dark:text-emerald-200"
                              : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-200",
                          )}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <Button
                type="button"
                variant="ghost"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className="cursor-pointer"
              >
                {locale?.back ?? "Back"}
              </Button>
              {step < 2 ? (
                <Button
                  type="button"
                  disabled={!canNext}
                  onClick={() => setStep((s) => s + 1)}
                  className="h-11 cursor-pointer gap-2 rounded-full bg-zinc-950 px-5 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950"
                >
                  {locale?.next ?? "Continue"}
                  <ArrowRight className="size-4" />
                </Button>
              ) : (
                <Button
                  type="button"
                  disabled={!canNext}
                  onClick={goContact}
                  className="h-11 cursor-pointer gap-2 rounded-full bg-zinc-950 px-5 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950"
                >
                  {locale?.finish ?? "Send inquiry"}
                  <ArrowRight className="size-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquirySteps;
