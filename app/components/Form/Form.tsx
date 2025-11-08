"use client";
import { Input } from "./Input";
import { Button } from "../Button";
import { TextArea } from "./Textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { formData, formSchema } from "@/app/schemas/formSchema";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: formData) => {
    try{
      await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    from_name: data.name,
    from_email: data.email,
    message: data.textarea,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
   toast.success("Mensaje enviado correctamente");
 
  }
catch(err: any){
   toast.error("No se pudo enviar el mensaje");
  console.error("No se pudo enviar el mail", err)
}
} 

  return (
  <form
  onSubmit={handleSubmit(onSubmit)}
  className="max-w-md mx-auto flex flex-col space-y-6 
             bg-[#F9F9F8]/90 backdrop-blur-sm p-8 rounded-2xl 
             shadow-lg border border-[#AEE4EA]/40 mt-7"
>
  <h2 className="text-2xl font-semibold text-center text-[#2A2D34] mb-2">
    Contactanos
  </h2>
  <p className="text-center text-sm text-[#2A2D34]/80 mb-6 leading-relaxed">
    Completá el formulario y te responderemos a la brevedad.
  </p>

  {/* Inputs iguales, pero con foco verde pera y borde celeste río */}
  <Input
    label="Nombre y Apellido"
    placeholder="Juan Gonzalez"
    {...register("name")}
    error={errors.name?.message}
  />

  <Input
    label="Email"
    placeholder="juangonzalez@gmail.com"
    {...register("email")}
    error={errors.email?.message}
  />

  <TextArea
    label="Mensaje"
    placeholder="Escribí tu mensaje aquí..."
    {...register("textarea")}
    error={errors.textarea?.message}
  />

  <Button
    type="submit"
    disabled={isSubmitting}
    label={isSubmitting ? "Enviando..." : "Enviar"}
    className="bg-[#9bcb88] hover:bg-[#8cb87b] text-[#2A2D34] 
               font-semibold py-3 rounded-xl shadow-md hover:shadow-lg 
               transition-all duration-300 transform hover:-translate-y-0.5 
               focus:ring-2 focus:ring-[#AEE4EA] focus:outline-none"
  />
</form>

  );
}