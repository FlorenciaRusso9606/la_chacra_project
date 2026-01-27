import { z } from "zod";

export const checkoutSchema = z.object({
  customerName: z
    .string()
    .min(3, "El nombre es obligatorio"),
  email: z
    .string()
    .email("Email inválido"),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
