import {z} from "zod";

export const formSchema = z.object({
    name: z.string().min(3, "El nombre debe tener al menos 3 caracteres").max(50, "El nombre no debe tener más de 50 caracteres"),
    email: z.email({message: "El email no es válido"}),
    textarea: z.string().min(3, "El mensaje debe tener al menos 3 caracteres").max(600, "El mensaje no puede tener más de 600 caracteres")
})

export type formData = z.infer<typeof formSchema>