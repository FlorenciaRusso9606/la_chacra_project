"use client";

import { motion } from "framer-motion";
import { Product } from "@/app/types/product";
import { useCart } from "@/app/providers/CartProvider";
import { Button } from "@/app/components/ui/Button";

type Props = {
  title: string;
  description?: string;
  products: Product[];
};

export function ProductGrid({ title, description, products }: Props) {
  const { addToCart } = useCart();

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

  if (products.length === 0) return null;

  return (
    <section className="mt-32">
      <div className="text-center mb-20 px-6">
        <h2 className="text-4xl font-semibold tracking-tight">{title}</h2>

        {description && (
          <p className="text-[#2A2D34]/70 mt-4 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto px-6">
        {products.map((p, i) => (
          <article
            key={p.id}
            className="flex flex-col items-center text-center group"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden bg-white border border-[#e9eceb] shadow-sm hover:shadow-lg transition-all duration-500">
                <motion.img
                  src={
                    p.imageUrl
                      ? `${BACKEND_URL}${p.imageUrl}`
                      : "/images/products/proximamente.png"
                  }
                  alt={p.name}
                  className="w-full h-full object-contain p-5 transition-transform duration-700 group-hover:scale-105"
                />

                {p.stock === 0 && (
                  <div className="absolute inset-0 bg-white/70 flex items-center justify-center text-md font-semibold text-gray-700">
                    Sin stock
                  </div>
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold">{p.name}</h3>

                <p className="text-[#b01a2f] font-medium">
                  ${p.price}
                  {p.weight && (
                    <span className="text-[#2A2D34]/60 text-sm">
                      {" "}
                      | {p.weight}
                    </span>
                  )}
                </p>

                <div
                  className="mt-3 w-10 h-[3px] rounded-full mx-auto"
                  style={{ backgroundColor: p.color }}
                />

                <Button
                
                  onClick={() => addToCart(p)}
                  disabled={p.stock === 0}
                  className="
                    mt-4
                    w-full
                    bg-[#639251]
                    text-white
                    font-medium
                    rounded-md
                    py-2
                    transition
                    hover:bg-[#4f7a3f]
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >Agregar al carrito</Button>
              </div>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
}
