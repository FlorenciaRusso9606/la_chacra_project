"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../lib/axios";
import { loginData, loginSchema } from "../../schemas/loginSchema";
import { useAuth } from "../../providers/AuthProvider";
import { Admin } from "../../types/admin";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/Form/Input";
export default function LoginPage() {
  const router = useRouter();
  const { setAdmin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
console.log("LOGIN RENDER")
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: loginData) => {
    try {
      await api.post("/auth/login-proxy", data, { withCredentials: true });
      const me = await api.get<Admin>("/auth/me-proxy", { withCredentials: true });

      setAdmin(me.data);
      toast.success("Login exitoso");

      router.push("/dashboard-lch-2026");
    } catch (err: any) {
       toast.error("Credenciales inválidas");
    }
  };

  return (
    <main className="w-full">
      <div className="min-h-screen flex flex-col items-center justify-center px-4 relative w-full" >
        <div className="max-w-sm min-h-screen flex items-center justify-center">
          {/* Motion wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            {/* Card */}
            <div className="p-5 rounded-xl w-full flex flex-col gap-3"
            >
              

              <h1 className="text-lg text-center font-bold">
                Iniciar Sesión
              </h1>

              {/* Form */}
              <form className="flex flex-col gap-2.5"
                onSubmit={handleSubmit(onSubmit)}
              >
            
<Input
        id="email"
        label="Email"
        placeholder="juangonzalez@gmail.com"
        error={errors.email?.message}
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? "email-error" : undefined}
        {...register("email")}
      />
   <div className="relative">
  <Input
    id="password"
    type={showPassword ? "text" : "password"}
    label="Contraseña"
    placeholder="******"
    error={errors.password?.message}
    {...register("password")}
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-9 text-gray-500"
  >
    {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
  </button>
</div>

               

                <Button
                label={isSubmitting ? "Ingresando..." : "Ingresar"}
                  type="submit"
                  color="primary"
                  disabled={isSubmitting}
                  className="font-bold"
                  aria-busy={isSubmitting}
                >
                  
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
