"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, CheckoutFormData } from "@/app/schemas/checkoutSchema";
import { Input } from "../components/Form/Input";
import { Button } from "../components/ui/Button";
import { useCart } from "@/app/providers/CartProvider";
import toast from "react-hot-toast";
import api from "@/app/lib/axios";

export default function CheckoutForm() {
  const { items, clearCart } = useCart();

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Nombre y apellido"
        {...register("customerName")}
        error={errors.customerName?.message}
      />

      <Input
        label="Email"
        {...register("email")}
        error={errors.email?.message}
      />

      <Button type="submit" disabled={isSubmitting || items.length === 0}>
        {isSubmitting ? "Procesando..." : "Confirmar compra"}
      </Button>
    </form>
  );
}
