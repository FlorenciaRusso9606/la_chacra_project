"use client";

import { useCart } from "@/app/providers/CartProvider";
import { Button } from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";
import { Trash2, X } from 'lucide-react';

export function CartDrawer() {
  const {
    items,
    totalItems,
    totalPrice,
    open,
    closeCart,
    increase,
    decrease,
    removeItem,
  } = useCart();

  const router = useRouter();

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

  return (
    <div
  className={`
    fixed inset-0 z-50
    transition-opacity duration-300
    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
>
  <div
    className="absolute inset-0 bg-black/40"
    onClick={closeCart}
  />

    <aside
    className={`
      absolute right-0 top-0 h-full w-full max-w-md
      bg-white shadow-xl flex flex-col
      transform transition-transform duration-300 ease-out will-change-transform

      ${open ? "translate-x-0" : "translate-x-full"}
    `}
  >
        <header className="flex justify-center items-center p-4 border-b border-[#9bcb88]">
           <Button className="text-[#2C3E2F] flex-1" onClick={closeCart}><X/></Button>
           
          <h2 className="text-md font-normal flex-2">
            Carrito ({totalItems})
          </h2>
         
        </header>

        <ul className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 && (
            <p className="text-center text-gray-500">
              Tu carrito está vacío
            </p>
          )}

          {items.map(item => (
            <li
              key={item.id}
              className="flex gap-2 pb-3"
            >
              {item.imageUrl && (
                <img
                  src={
                    item.imageUrl
                      ? `${BACKEND_URL}${item.imageUrl}`
                      : "/images/products/proximamente.png"
                  }
                  alt={item.name}
                  className="h-16 w-16 object-cover rounded"
                />
              )}

              <div className="flex-1 ">
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">
  Stock disponible: {item.stock - item.quantity}
</p>

                <p className="text-sm text-gray-500">
                  ${item.price} c/u
                </p>
                <div className="flex items-bottom w-[60%]">
                   <div className="flex justify-center items-center rounded-3xl gap-2 mt-2 border w-[70%] text-[#2C3E2F] border-[#2C3E2F]">
<Button
  className="text-[#2C3E2F]"
  onClick={() => decrease(item.id)}
  disabled={item.quantity <= 1}
>
  -
</Button>
                  <span>{item.quantity}</span>

             <Button
  onClick={() => increase(item.id)}
  disabled={item.quantity >= item.stock}
>
  +
</Button>

                </div>
                   <Button
                 
                    className=" text-[#b01a2f]"
                    onClick={() => removeItem(item.id)}
                  >
                        <Trash2 size={18} />
                  </Button>
              </div>
              {item.quantity >= item.stock && (
  <p className="text-xs text-[#b01a2f] mt-1">
    Llegaste al máximo disponible
  </p>
)}
                </div>
               

              <div className="font-semibold mr-2">
                ${item.price * item.quantity}
              </div>
            </li>
          ))}
        </ul>

        <footer className="flex flex-col p-4 border-t border-[#9bcb88] mr-2">
          <div className="flex justify-between mb-4 ">
            <span>Total</span>
            <span className="font-semibold">${totalPrice}</span>
          </div>

          <Button
         className="    mt-4
                    w-full
                    bg-[#639251]
                    text-white
                    font-medium
                    rounded-md
                    py-2
                    transition
                    hover:bg-[#4f7a3f]
                  
                   "
            onClick={() => {
              closeCart();
              router.push("/checkout");
            }}
          >
          Comprar
          </Button>
        </footer>
      </aside>
    </div>
  );
}
