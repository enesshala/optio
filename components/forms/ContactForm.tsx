"use client";

import { BootcampSendButton } from "@/components/forms/BootcampSendButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import {
  createBootcampContactSchema,
  createHomeContactSchema,
  type ContactValidationMessages,
} from "@/lib/validations/contact";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import type { z } from "zod";

export type ContactFormLocale = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  experienceLabel: string;
  experiencePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  packageLabel?: string;
  packagePrefill?: string;
  submit: string;
  submitting: string;
  success: string;
  successShort?: string;
  error: string;
  errors?: ContactValidationMessages;
};

type ContactFormProps = {
  variant: "home" | "bootcamp";
  locale: ContactFormLocale;
  source?: string;
  className?: string;
};

type HomeValues = z.infer<ReturnType<typeof createHomeContactSchema>>;
type BootcampValues = z.infer<ReturnType<typeof createBootcampContactSchema>>;

const inputClass =
  "h-11 rounded-xl border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-emerald-500/20 dark:border-white/10 dark:bg-zinc-950/80 dark:text-zinc-100 dark:placeholder:text-zinc-500";

function validationMessages(locale: ContactFormLocale): ContactValidationMessages {
  return {
    nameMin: locale.errors?.nameMin ?? "Please enter at least 2 characters.",
    emailInvalid: locale.errors?.emailInvalid ?? "Please enter a valid email address.",
    phoneInvalid: locale.errors?.phoneInvalid ?? "Please enter a valid phone number.",
    messageMin: locale.errors?.messageMin ?? "Message must be at least 10 characters.",
    messageMax: locale.errors?.messageMax ?? "Message is too long.",
    experienceMax: locale.errors?.experienceMax ?? "Background is too long.",
    invalidSubmission: "Invalid submission.",
    invalidType: "Invalid form type.",
  };
}

function packageMessage(locale: ContactFormLocale, packageName: string) {
  const template = locale.packagePrefill ?? "I'm interested in the {package} package.";
  return template.replace("{package}", packageName);
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-sm text-red-600 dark:text-red-400">{message}</p>;
}

function ContactFormInner({
  variant,
  locale,
  source,
  className,
}: ContactFormProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const packageParam = searchParams.get("package");

  const [sent, setSent] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const messages = useMemo(() => validationMessages(locale), [locale]);
  const schema =
    variant === "home"
      ? createHomeContactSchema(messages)
      : createBootcampContactSchema(messages);

  const form = useForm<HomeValues | BootcampValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues:
      variant === "home"
        ? {
            type: "home",
            name: "",
            email: "",
            phone: "",
            message: "",
            website: "",
            package: "",
            source: "",
          }
        : {
            type: "bootcamp",
            name: "",
            email: "",
            phone: "",
            experience: "",
            message: "",
            website: "",
            source: "",
          },
  });

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    if (variant !== "home" || !packageParam) return;
    setSelectedPackage(packageParam);
    setValue("package", packageParam);
    const currentMessage = form.getValues("message");
    if (!currentMessage?.trim()) {
      setValue("message", packageMessage(locale, packageParam), {
        shouldValidate: true,
      });
    }
  }, [packageParam, variant, locale.packagePrefill, setValue, form]);

  function clearPackage() {
    setSelectedPackage(null);
    setValue("package", "");
    if (!searchParams.get("package")) return;
    const params = new URLSearchParams(searchParams.toString());
    params.delete("package");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  async function onSubmit(values: HomeValues | BootcampValues) {
    if (sent) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          phone: values.phone || undefined,
          package:
            variant === "home" && selectedPackage ? selectedPackage : undefined,
          experience:
            variant === "bootcamp" && "experience" in values
              ? values.experience || undefined
              : undefined,
          source: source || window.location.pathname,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || locale.error);
      }

      setSent(true);
      reset();
      setSelectedPackage(null);
      clearPackage();
      toast.success(locale.success);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : locale.error);
    }
  }

  const disabled = isSubmitting || sent;

  return (
    <>
      <Toaster position="bottom-center" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("flex w-full flex-col gap-4", className)}
        noValidate
      >
        <input type="hidden" {...register("type")} />
        <input type="hidden" {...register("package")} />

        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
          <label htmlFor={`website-${variant}`}>Website</label>
          <input
            id={`website-${variant}`}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        {variant === "home" && selectedPackage && (
          <div className="flex items-center justify-between gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
            <p className="text-sm text-zinc-700 dark:text-zinc-200">
              <span className="font-medium text-emerald-700 dark:text-emerald-400">
                {locale.packageLabel ?? "Package"}:
              </span>{" "}
              {selectedPackage}
            </p>
            <button
              type="button"
              onClick={clearPackage}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-emerald-500/10 hover:text-zinc-800 dark:hover:text-zinc-200"
              aria-label="Clear selected package"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`name-${variant}`}>{locale.nameLabel}</Label>
            <Input
              id={`name-${variant}`}
              autoComplete="name"
              placeholder={locale.namePlaceholder}
              className={cn(inputClass, errors.name && "border-red-500 focus-visible:ring-red-500/20")}
              disabled={disabled}
              {...register("name")}
            />
            <FieldError message={errors.name?.message} />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`email-${variant}`}>{locale.emailLabel}</Label>
            <Input
              id={`email-${variant}`}
              type="email"
              autoComplete="email"
              placeholder={locale.emailPlaceholder}
              className={cn(inputClass, errors.email && "border-red-500 focus-visible:ring-red-500/20")}
              disabled={disabled}
              {...register("email")}
            />
            <FieldError message={errors.email?.message} />
          </div>
        </div>

        <div
          className={cn(
            "grid gap-4",
            variant === "bootcamp" ? "sm:grid-cols-2" : "grid-cols-1"
          )}
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`phone-${variant}`}>{locale.phoneLabel}</Label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  id={`phone-${variant}`}
                  defaultCountry="XK"
                  international
                  countryCallingCodeEditable={false}
                  placeholder={locale.phonePlaceholder}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  disabled={disabled}
                  className={cn(errors.phone && "[&_input]:border-red-500")}
                />
              )}
            />
            <FieldError message={errors.phone?.message} />
          </div>

          {variant === "bootcamp" && (
            <div className="flex flex-col gap-1.5">
              <Label htmlFor={`experience-${variant}`}>
                {locale.experienceLabel}
              </Label>
              <Input
                id={`experience-${variant}`}
                placeholder={locale.experiencePlaceholder}
                className={cn(
                  inputClass,
                  "experience" in errors &&
                    errors.experience &&
                    "border-red-500 focus-visible:ring-red-500/20"
                )}
                disabled={disabled}
                {...register("experience")}
              />
              {"experience" in errors && (
                <FieldError message={errors.experience?.message} />
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`message-${variant}`}>{locale.messageLabel}</Label>
          <Textarea
            id={`message-${variant}`}
            rows={variant === "bootcamp" ? 5 : 4}
            placeholder={locale.messagePlaceholder}
            disabled={disabled}
            className={cn(
              inputClass,
              "h-auto resize-y min-h-[120px] px-4 py-3",
              errors.message && "border-red-500 focus-visible:ring-red-500/20"
            )}
            {...register("message")}
          />
          <FieldError message={errors.message?.message} />
        </div>

        {variant === "bootcamp" ? (
          <BootcampSendButton
            disabled={disabled}
            isSubmitting={isSubmitting}
            sent={sent}
            label={locale.submit}
            submittingLabel={locale.submitting}
            successLabel={locale.successShort ?? locale.success}
            className="w-full sm:w-auto sm:self-start"
          />
        ) : (
          <Button
            type="submit"
            disabled={disabled}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white sm:w-auto sm:self-start"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {locale.submitting}
              </>
            ) : (
              locale.submit
            )}
          </Button>
        )}
      </form>
    </>
  );
}

export default function ContactForm(props: ContactFormProps) {
  return (
    <Suspense
      fallback={
        <div className="h-64 animate-pulse rounded-xl bg-zinc-100 dark:bg-zinc-900" />
      }
    >
      <ContactFormInner {...props} />
    </Suspense>
  );
}
