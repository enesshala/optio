"use client";

import { InquiryStepsSuccess } from "@/components/home/InquiryStepsSuccess";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { cn } from "@/lib/utils";
import {
  createInquirySchema,
  defaultValidationMessages,
  type InquiryFormValues,
} from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AlertCircle, ArrowRight, Check, Loader2 } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { Controller, useForm } from "react-hook-form";

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

type InquiryErrors = {
  nameMin?: string;
  emailInvalid?: string;
  phoneRequired?: string;
  phoneInvalid?: string;
  serviceRequired?: string;
  budgetRequired?: string;
};

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
  sending?: string;
  error?: string;
  successTitle?: string;
  successBody?: string;
  successAgain?: string;
  services?: string[];
  budgets?: string[];
  errors?: InquiryErrors;
};

const STEP_FIELDS: (keyof InquiryFormValues)[][] = [
  ["name", "email", "phone"],
  ["service"],
  ["budget"],
];

const emptyValues: InquiryFormValues = {
  type: "inquiry",
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  website: "",
  source: "",
};

const inputClass =
  "h-11 rounded-xl border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-emerald-500/20 dark:border-white/10 dark:bg-zinc-950/80 dark:text-zinc-100 dark:placeholder:text-zinc-500";

const optionClass = (selected: boolean, invalid: boolean) =>
  cn(
    "cursor-pointer rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors",
    selected
      ? "border-emerald-500 bg-emerald-50 text-emerald-900 dark:border-emerald-400 dark:bg-emerald-500/10 dark:text-emerald-200"
      : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-white/20",
    invalid && !selected && "border-red-300 dark:border-red-500/40",
  );

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-sm text-red-600 dark:text-red-400">{message}</p>;
}

const InquirySteps = ({
  locale,
  embedded = false,
}: {
  locale?: InquiryLocale;
  embedded?: boolean;
}) => {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [sentSummary, setSentSummary] = useState<{
    name: string;
    chips: string[];
  } | null>(null);

  const services = locale?.services?.length ? locale.services : DEFAULT_SERVICES;
  const budgets = locale?.budgets?.length ? locale.budgets : DEFAULT_BUDGETS;

  const schema = useMemo(
    () =>
      createInquirySchema({
        ...defaultValidationMessages,
        ...locale?.errors,
      }),
    [locale?.errors],
  );

  const {
    register,
    control,
    handleSubmit,
    setValue,
    trigger,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: emptyValues,
  });

  const service = watch("service");
  const budget = watch("budget");

  const steps = [
    locale?.stepContact ?? "Contact",
    locale?.stepService ?? "Service",
    locale?.stepBudget ?? "Budget",
  ];
  const progress = sent ? steps.length : step;

  async function goNext() {
    const valid = await trigger(STEP_FIELDS[step]);
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  async function onSubmit(values: InquiryFormValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          type: "inquiry",
          source: window.location.pathname,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || locale?.error || "Something went wrong.");
      }
      setSentSummary({
        name: values.name.trim().split(/\s+/)[0] ?? values.name,
        chips: [values.service, values.budget],
      });
      setSent(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : (locale?.error ?? "Something went wrong."),
      );
    }
  }

  function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    if (step < steps.length - 1) {
      event.preventDefault();
      void goNext();
      return;
    }
    void handleSubmit(onSubmit)(event);
  }

  function startOver() {
    reset(emptyValues);
    setSent(false);
    setSentSummary(null);
    setSubmitError(null);
    setStep(0);
  }

  const successBody = (
    locale?.successBody ??
    "Thanks, {name}. Your inquiry just landed in our inbox. Someone from the OPTIO team will reach out within 24 hours."
  ).replace("{name}", sentSummary?.name ?? "");

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
                  aria-current={!sent && i === step ? "step" : undefined}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={cn(
                        "grid size-7 place-items-center rounded-full text-[12px] font-semibold tabular-nums transition-[background-color,color,box-shadow]",
                        i < progress
                          ? "bg-emerald-500 text-white"
                          : i === progress
                            ? "bg-emerald-500 text-white shadow-[0_0_0_4px_rgb(16_185_129/0.15)]"
                            : "bg-white text-zinc-500 shadow-[0_0_0_1px_rgb(9_9_11/0.1)] dark:bg-zinc-900 dark:text-zinc-400",
                      )}
                    >
                      {i < progress ? <Check className="size-3.5" /> : i + 1}
                    </span>
                    <span
                      className={cn(
                        "text-[13px] font-medium transition-colors",
                        i === progress
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
                          i < progress ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>

            {sent ? (
              <div className="mt-6">
                <InquiryStepsSuccess
                  title={locale?.successTitle ?? "Message sent — we're on it."}
                  body={successBody}
                  againLabel={locale?.successAgain ?? "Send another inquiry"}
                  chips={sentSummary?.chips ?? []}
                  onReset={startOver}
                />
              </div>
            ) : (
              <form onSubmit={onFormSubmit} noValidate>
                <div
                  className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                  aria-hidden
                >
                  <label htmlFor="inquiry-website">Website</label>
                  <input
                    id="inquiry-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("website")}
                  />
                </div>

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
                          <div className="flex flex-col gap-1.5">
                            <Label htmlFor="inquiry-name">
                              {locale?.nameLabel ?? "Name"}
                            </Label>
                            <Input
                              id="inquiry-name"
                              autoComplete="name"
                              placeholder={
                                locale?.namePlaceholder ?? "Your name"
                              }
                              aria-invalid={Boolean(errors.name)}
                              className={cn(
                                inputClass,
                                errors.name &&
                                  "border-red-500 focus-visible:ring-red-500/20",
                              )}
                              {...register("name")}
                            />
                            <FieldError message={errors.name?.message} />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <Label htmlFor="inquiry-email">
                              {locale?.emailLabel ?? "Email"}
                            </Label>
                            <Input
                              id="inquiry-email"
                              type="email"
                              autoComplete="email"
                              placeholder={
                                locale?.emailPlaceholder ?? "you@company.com"
                              }
                              aria-invalid={Boolean(errors.email)}
                              className={cn(
                                inputClass,
                                errors.email &&
                                  "border-red-500 focus-visible:ring-red-500/20",
                              )}
                              {...register("email")}
                            />
                            <FieldError message={errors.email?.message} />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <Label htmlFor="inquiry-phone">
                              {locale?.phoneLabel ?? "Phone"}
                            </Label>
                            <Controller
                              name="phone"
                              control={control}
                              render={({ field }) => (
                                <PhoneInput
                                  id="inquiry-phone"
                                  placeholder={
                                    locale?.phonePlaceholder ??
                                    "Your phone number"
                                  }
                                  value={field.value}
                                  onChange={field.onChange}
                                  onBlur={field.onBlur}
                                  aria-invalid={Boolean(errors.phone)}
                                  className={cn(
                                    errors.phone && "[&_input]:border-red-500",
                                  )}
                                />
                              )}
                            />
                            <FieldError message={errors.phone?.message} />
                          </div>
                        </div>
                      ) : null}

                      {step === 1 ? (
                        <div className="flex flex-col gap-2">
                          <div
                            role="radiogroup"
                            aria-label={locale?.stepService ?? "Service"}
                            className="grid gap-2"
                          >
                            {services.map((item) => (
                              <button
                                key={item}
                                type="button"
                                role="radio"
                                aria-checked={service === item}
                                onClick={() =>
                                  setValue("service", item, {
                                    shouldValidate: true,
                                  })
                                }
                                className={optionClass(
                                  service === item,
                                  Boolean(errors.service),
                                )}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                          <FieldError message={errors.service?.message} />
                        </div>
                      ) : null}

                      {step === 2 ? (
                        <div className="flex flex-col gap-2">
                          <div
                            role="radiogroup"
                            aria-label={locale?.stepBudget ?? "Budget"}
                            className="grid gap-2"
                          >
                            {budgets.map((item) => (
                              <button
                                key={item}
                                type="button"
                                role="radio"
                                aria-checked={budget === item}
                                onClick={() =>
                                  setValue("budget", item, {
                                    shouldValidate: true,
                                  })
                                }
                                className={optionClass(
                                  budget === item,
                                  Boolean(errors.budget),
                                )}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                          <FieldError message={errors.budget?.message} />
                        </div>
                      ) : null}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <AnimatePresence>
                  {submitError ? (
                    <motion.div
                      role="alert"
                      initial={reduceMotion ? false : { opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0 }}
                      className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
                    >
                      <AlertCircle className="mt-0.5 size-4 shrink-0" />
                      <span>{submitError}</span>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <Button
                    type="button"
                    variant="ghost"
                    disabled={step === 0 || isSubmitting}
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    className="cursor-pointer"
                  >
                    {locale?.back ?? "Back"}
                  </Button>
                  {step < steps.length - 1 ? (
                    <Button
                      type="button"
                      onClick={() => void goNext()}
                      className="h-11 cursor-pointer gap-2 rounded-full bg-zinc-950 px-5 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                    >
                      {locale?.next ?? "Continue"}
                      <ArrowRight className="size-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-11 cursor-pointer gap-2 rounded-full bg-zinc-950 px-5 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          {locale?.sending ?? "Sending…"}
                        </>
                      ) : (
                        <>
                          {locale?.finish ?? "Send inquiry"}
                          <ArrowRight className="size-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquirySteps;
