"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../lib/axios";
import { loginData, loginSchema } from "../../schemas/loginSchema";
import { useAuth } from "../../providers/AuthProvider";
import { Admin } from "../../types/admin";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Eye, EyeClosed, Lock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/Form/Input";
import { Navbar } from "@/app/components/Navbar";
export default function LoginPage() {
  const router = useRouter();
  const { setAdmin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

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
    } catch {
      toast.error("Credenciales inválidas");
    }
  };

  return (
    <div>
 <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#f6faf4] to-[#eef6ea] px-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full max-w-sm"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-[#e3efdd] p-6 flex flex-col gap-5">

          {/* Header */}
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-[#639251]/10 flex items-center justify-center">
              <Lock className="text-[#639251]" />
            </div>

            <h1 className="text-lg font-semibold">
              Panel de administración
            </h1>

            <p className="text-sm text-gray-500">
              Acceso restringido
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">

            <Input
              id="email"
              label="Email"
              placeholder="admin@correo.com"
              error={errors.email?.message}
              {...register("email")}
            />

            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                label="Contraseña"
                placeholder="••••••••"
                error={errors.password?.message}
                {...register("password")}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 transition"
              >
                {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
              </button>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full bg-[#639251] hover:bg-[#4f7a3f]"
            >
              {isSubmitting ? "Ingresando..." : "Ingresar"}
            </Button>
          </form>
        </div>
      </motion.div>
    </main>
    </div>
   
  );
}
