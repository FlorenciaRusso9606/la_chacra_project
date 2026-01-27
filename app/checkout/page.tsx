"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, CheckoutFormData } from "@/app/schemas/checkoutSchema";
import { Input } from "../components/Form/Input";
import { Button } from "../components/ui/Button";
import { useCart } from "@/app/providers/CartProvider";
import toast from "react-hot-toast";
import api from "@/app/lib/axios";
import { ShoppingBag } from "lucide-react";

export default function CheckoutForm() {
  const { items, clearCart, totalPrice } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      const orderRes = await api.post("/orders", {
        customerName: data.customerName,
        email: data.email,
        items: items.map(i => ({
          productId: i.id,
          quantity: i.quantity,
        })),
      });

      const order = orderRes.data;

      const paymentRes = await api.post(
        "/payments/mercadopago",
        { orderId: order.id }
      );

      const { init_point } = paymentRes.data;

      clearCart();
      window.location.href = init_point;

    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
        "No se pudo iniciar el pago"
      );
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7fbf5] flex justify-center px-4 py-10">
      <div className="w-full max-w-xl">

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#e3efdd] p-6 space-y-6">

          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#639251]/10 flex items-center justify-center">
              <ShoppingBag className="text-[#639251]" />
            </div>

            <div>
              <h1 className="text-lg font-semibold">Finalizar compra</h1>
              <p className="text-sm text-gray-500">
                Completá tus datos para continuar
              </p>
            </div>
          </div>

          {/* Resumen */}
          <div className="bg-[#f6faf4] rounded-lg p-4 text-sm">
            <div className="flex justify-between mb-2">
              <span>Productos</span>
              <span>{items.length}</span>
            </div>
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Nombre y apellido"
              placeholder="Juan Pérez"
              {...register("customerName")}
              error={errors.customerName?.message}
            />

            <Input
              label="Email"
              placeholder="juan@email.com"
              {...register("email")}
              error={errors.email?.message}
            />

            <Button
              type="submit"
              disabled={isSubmitting || items.length === 0}
              className="w-full bg-[#639251] hover:bg-[#4f7a3f]"
            >
              {isSubmitting ? "Redirigiendo a Mercado Pago..." : "Confirmar compra"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
