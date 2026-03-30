"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { Product } from "../../types/product";
import api from "../../lib/axios"
import { useCart } from "@/app/providers/CartProvider";
import { ProductGrid } from "../../components/products/ProductGrid";
import { getImageUrl } from "@/app/lib/getImageUrl"
export default function Productos() {
  const reduceMotion = useReducedMotion();
const [products, setProducts] = useState<Product[]>([]);
const { addToCart } = useCart();

useEffect(() =>  {
api.get("/store/products").then((res) => setProducts(res.data))
    
}, []);
const dulces = products.filter(p => p.category === "DULCE");
const pures = products.filter(p => p.category === "PURE");
const confituras = products.filter(p => p.category === "CONFITURA");

  return (
    <main>
      <section className="flex flex-col text-[#2A2D34] justify-between">
        {/* Hero */}
        <header className="max-w-4xl h-[70vh] flex flex-col justify-center items-center mx-auto px-6 py-16 text-center leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-light">
            Dulces artesanales{" "}
            <span className="font-semibold text-[#9bcb88]">100% naturales</span>
            , elaborados con frutas seleccionadas en el
            <span className="font-medium text-[#b01a2f]">
              {" "}
              Valle de Río Negro
            </span>
            .
            <br />
            Sin conservantes, sin aditivos, con el sabor auténtico de nuestra
            tierra.
          </h1>
        </header>

        {/* Banner */}
        <div className="relative w-full h-[95vh] sm:h-[80vh] overflow-hidden shadow-inner">
          <picture>
            <source
              media="(min-width:1024px)"
              srcSet="/images/banner/banner-desktop.jpg"
            />
            <source
              media="(min-width:640px)"
              srcSet="/images/banner/banner-tablet.jpg"
            />
            <img
              src="/images/banner/banner-mobile.jpg"
              alt="Dulces artesanales del Valle de Río Negro"
              loading="lazy"
              className="w-full h-full object-cover lg:object-contain"
            />
          </picture>
          <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
        </div>

        {/* Productos */}
        <section className="py-24 px-6">
        
          {/* Grid */}
       <ProductGrid
  title="Nuestros Dulces"
  description="Cocidos a fuego lento, con el equilibrio justo entre dulzura y sabor natural."
  products={dulces}
/>

<ProductGrid
  title="Línea Gourmet"
  description="Sabores más suaves y versátiles, pensados para acompañar y realzar otras preparaciones."
  products={pures}
/>

<ProductGrid
  title="Confituras"
  description="Más intensas y con carácter, donde la fruta y la acidez encuentran su mejor equilibrio."
  products={confituras}
/>
          
        </section>
      </section>
    </main>
  );
}
