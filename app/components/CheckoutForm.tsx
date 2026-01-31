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
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const { items, clearCart, totalPrice } = useCart();
const router = useRouter();

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
  phone: data.phone,
  province: data.province,
  city: data.city,
  postalCode: data.postalCode,
  addressLine1: data.addressLine1,
  addressLine2: data.addressLine2,
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
const totalUnits = items.reduce(
  (acc, item) => acc + item.quantity,
  0
);
  return (
    <div className="min-h-screen bg-[#f7fbf5] flex justify-center px-4 py-10">
      <div className="w-full max-w-xl">

        <div className="bg-white rounded-2xl shadow-lg border border-[#e3efdd] p-6 space-y-6">

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
             <p className="font-medium text-[#2C3E2F]">Resumen de compra</p>

               <ul className="space-y-2">
    {items.map(item => (
      <li
        key={item.id}
        className="flex justify-between gap-2"
      >
        <span className="text-gray-700">
          {item.name} × {item.quantity}
        </span>

        <span className="font-medium">
          ${item.price * item.quantity}
        </span>
      </li>
    ))}
  </ul>
            
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>

       <form
  onSubmit={handleSubmit(onSubmit)}
  className="grid grid-cols-1 gap-4 sm:grid-cols-2"
>
  <Input
    label="Teléfono (opcional)"
    {...register("phone")}
    error={errors.phone?.message}
  />

  <Input
    label="Código Postal"
    {...register("postalCode")}
    error={errors.postalCode?.message}
  />

  <Input
    label="Provincia"
    {...register("province")}
    error={errors.province?.message}
  />

  <Input
    label="Ciudad"
    {...register("city")}
    error={errors.city?.message}
  />

  <Input
    label="Dirección"
    className="sm:col-span-2"
    {...register("addressLine1")}
    error={errors.addressLine1?.message}
  />

  <Input
    label="Departamento / Casa (opcional)"
    className="sm:col-span-2"
    {...register("addressLine2")}
    error={errors.addressLine2?.message}
  />

  <p className="sm:col-span-2 text-xs text-center text-gray-500">
    Envíos disponibles únicamente dentro de Argentina
  </p>

  <Button
    type="submit"
    disabled={isSubmitting || items.length === 0}
    className="sm:col-span-2 w-full bg-[#639251] hover:bg-[#4f7a3f] py-2 text-white"
  >
    {isSubmitting
      ? "Redirigiendo a Mercado Pago..."
      : "Confirmar compra"}
  </Button>
</form>
    
      
          <p className="text-xs text-center text-gray-500">
  Serás redirigido a Mercado Pago para finalizar el pago de forma segura
</p>

        </div>
      </div>
    </div>
  );
}
