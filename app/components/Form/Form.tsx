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
      reset,
    formState: { errors, isSubmitting },
  } = useForm<formData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: formData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.textarea,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success("Mensaje enviado correctamente");
      reset();
    } catch (err: any) {
      toast.error("No se pudo enviar el mensaje");
      console.error("No se pudo enviar el mail", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      aria-labelledby="contact-title"
      aria-busy={isSubmitting}
      className="max-w-md mx-auto flex flex-col space-y-6 
                 bg-[#F9F9F8]/90 backdrop-blur-sm p-8 rounded-2xl 
                 shadow-lg border border-[#AEE4EA]/40 mt-7"
    >
      <h1
        id="contact-title"
        className="text-2xl font-semibold text-center text-[#2A2D34] mb-2"
      >
        Contactanos
      </h1>

      <p className="text-center text-sm text-[#2A2D34]/80 mb-6 leading-relaxed">
        Completá el formulario y te responderemos a la brevedad.
      </p>

      {/* Campo: Nombre y Apellido */}
      <Input
        id="name"
        label="Nombre y Apellido"
        placeholder="Juan Gonzalez"
        error={errors.name?.message}
        aria-invalid={!!errors.name}
        aria-describedby={errors.name ? "name-error" : undefined}
        {...register("name")}
      />
      {errors.name && (
        <p id="name-error" role="alert" className="text-red-600 text-sm">
          {errors.name.message}
        </p>
      )}

      {/* Campo: Email */}
      <Input
        id="email"
        label="Email"
        placeholder="juangonzalez@gmail.com"
        error={errors.email?.message}
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? "email-error" : undefined}
        {...register("email")}
      />
      {errors.email && (
        <p id="email-error" role="alert" className="text-red-600 text-sm">
          {errors.email.message}
        </p>
      )}

      {/* Campo: Mensaje */}
      <TextArea
        id="textarea"
        label="Mensaje"
        placeholder="Escribí tu mensaje aquí..."
        error={errors.textarea?.message}
        aria-invalid={!!errors.textarea}
        aria-describedby={errors.textarea ? "textarea-error" : undefined}
        {...register("textarea")}
      />
      {errors.textarea && (
        <p id="textarea-error" role="alert" className="text-red-600 text-sm">
          {errors.textarea.message}
        </p>
      )}

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
