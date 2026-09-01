import { isValidPhoneNumber } from "libphonenumber-js/min";
import { z } from "zod";

export const defaultValidationMessages = {
  nameMin: "Please enter at least 2 characters.",
  emailInvalid: "Please enter a valid email address.",
  phoneInvalid: "Please enter a valid phone number.",
  messageMin: "Message must be at least 10 characters.",
  messageMax: "Message is too long (max 2000 characters).",
  experienceMax: "Background is too long (max 500 characters).",
  invalidSubmission: "Invalid submission.",
  invalidType: "Invalid form type.",
};

export type ContactValidationMessages = typeof defaultValidationMessages;

function optionalPhoneSchema(message: string) {
  return z
    .string()
    .optional()
    .refine((val) => !val || isValidPhoneNumber(val), { message });
}

function baseFields(messages: ContactValidationMessages) {
  return {
    name: z.string().trim().min(2, messages.nameMin),
    email: z.string().trim().email(messages.emailInvalid),
    phone: optionalPhoneSchema(messages.phoneInvalid),
    message: z
      .string()
      .trim()
      .min(10, messages.messageMin)
      .max(2000, messages.messageMax),
    website: z
      .string()
      .optional()
      .refine((val) => !val?.trim(), messages.invalidSubmission),
    source: z.string().optional(),
    package: z.string().optional(),
  };
}

export function createHomeContactSchema(messages = defaultValidationMessages) {
  return z.object({
    type: z.literal("home"),
    ...baseFields(messages),
  });
}

export function createBootcampContactSchema(
  messages = defaultValidationMessages
) {
  return z.object({
    type: z.literal("bootcamp"),
    ...baseFields(messages),
    experience: z
      .string()
      .trim()
      .max(500, messages.experienceMax)
      .optional()
      .or(z.literal("")),
  });
}

export function createContactApiSchema(messages = defaultValidationMessages) {
  return z.discriminatedUnion("type", [
    createHomeContactSchema(messages),
    createBootcampContactSchema(messages),
  ]);
}

export type HomeContactFormValues = z.infer<
  ReturnType<typeof createHomeContactSchema>
>;
export type BootcampContactFormValues = z.infer<
  ReturnType<typeof createBootcampContactSchema>
>;

export const homeContactApiSchema = createHomeContactSchema();
export const bootcampContactApiSchema = createBootcampContactSchema();
export const contactApiSchema = createContactApiSchema();
