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

function parseWeight(weight?: string | number): number {
  if (!weight) return 0;
  if (typeof weight === "number") return weight;
  const match = weight.toString().match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

function NoImagePlaceholder() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinejoin="round" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
      </svg>
      <span className="text-sm font-medium text-gray-400 tracking-wide">Sin imagen</span>
    </div>
  );
}

export function ProductGrid({ title, description, products }: Props) {
  const { addToCart } = useCart();

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

  if (products.length === 0) return null;

  // Ordenar por peso descendente
  const sortedProducts = [...products].sort(
    (a, b) => parseWeight(b.weight) - parseWeight(a.weight)
  );

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
        {sortedProducts.map((p, i) => (
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
              {/*  imágenes 320×320 */}
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden bg-white border border-[#e9eceb] shadow-sm hover:shadow-lg transition-all duration-500">
                {p.imageUrl ? (
                  <motion.img
                    src={`${BACKEND_URL}${p.imageUrl}`}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <NoImagePlaceholder />
                )}

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
                >
                  Agregar al carrito
                </Button>
              </div>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
}