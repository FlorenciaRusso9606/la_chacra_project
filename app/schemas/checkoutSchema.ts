import { z } from "zod";

export const checkoutSchema = z.object({
  customerName: z
    .string()
    .min(3, "El nombre es obligatorio"),

  email: z
    .email("Email inválido"),

 phone: z
  .string()
  .transform(v => v.trim())
  .refine(v => v === "" || v.length >= 8, {
    message: "Teléfono inválido",
  }),


  province: z
    .string()
    .min(1, "Provincia requerida"),

  city: z
    .string()
    .min(1, "Ciudad requerida"),

  postalCode: z
    .string()
    .min(4, "Código postal inválido"),

  addressLine1: z
    .string()
    .min(5, "Dirección requerida"),

  addressLine2: z
    .string()
    .optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
