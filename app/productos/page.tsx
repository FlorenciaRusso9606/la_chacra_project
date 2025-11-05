"use client";
import { motion } from "framer-motion";

const productos = [
  { nombre: "Dulce de Pera", imagen: "/images/productos/pera.jpg", color: "#9bcb88", precio: 4200, peso: "460g" },
  { nombre: "Dulce de Manzana", imagen: "/images/productos/manzana.jpg", color: "#b01a2f", precio: 4200, peso: "460g" },
  { nombre: "Dulce de Frutilla", imagen: "/images/productos/frutilla.jpg", color: "#e1ac48", precio: 4200, peso: "460g" },
  { nombre: "Dulce de Durazno", imagen: "/images/productos/durazno.jpg", color: "#95cad3", precio: 4200, peso: "460g" },
  { nombre: "Dulce de Higo", imagen: "/images/productos/higo.jpg", color: "#b01a2f", precio: 4200, peso: "460g" },
];

export default function Productos() {
  return (
    <section className=" flex flex-col text-[#2A2D34] justify-between">
      {/* Texto inicial */}
      <div className="max-w-4xl h-[70vh] flex flex-col justify-center items-center mx-auto px-6 py-16 text-center leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-light">
          Dulces artesanales <span className="font-semibold text-[#b01a2f]">100% naturales</span>, 
          elaborados con frutas seleccionadas en el 
          <span className="font-medium text-[#9bcb88]"> Valle de Río Negro</span>.  
          <br />
          Sin conservantes, sin aditivos, con el sabor auténtico de nuestra tierra.
        </h1>
      </div>

      {/* Banner responsive */}
      <div className="relative w-full h-[95vh] sm:h-[80vh]  overflow-hidden shadow-inner">
        <picture>
          <source media="(min-width:1024px)" srcSet="/images/banner/banner-desktop.jpg" />
          <source media="(min-width:640px)" srcSet="/images/banner/banner-tablet.jpg" />
          <img
            src="/images/banner/banner-mobile.jpg"
            alt="Dulces artesanales del Valle"
            className="w-full h-full object-cover lg:object-contain"
          />
        </picture>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Sección productos */}
      <div className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-semibold tracking-tight">
            Nuestros Productos
          </h2>
          <p className="text-[#2A2D34]/70 mt-4 text-lg max-w-2xl mx-auto">
            Recetas familiares, cocidas a fuego lento, con el balance justo entre dulzura y naturalidad.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto flex-1">
          {productos.map((p, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden bg-white border border-[#e9eceb] shadow-sm hover:shadow-lg transition-all duration-500">
                <motion.img
                  src={p.imagen}
                  alt={p.nombre}
                  className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold">{p.nombre}</h3>
                <p className="text-[#b01a2f] mt-1 font-medium">
                  ${p.precio} <span className="text-[#2A2D34]/60 text-sm">| {p.peso}</span>
                </p>
                <div
                  className="mt-3 w-10 h-[3px] rounded-full mx-auto"
                  style={{ backgroundColor: p.color }}
                />
              </div>
                
       
            </motion.div>
          ))}

        </div>
         <div className="max-w-4xl mx-auto text-center mb-20 mt-20">
          <h2 className="text-4xl font-semibold tracking-tight">
            Sección Gourmet
          </h2>
          <p className="text-[#2A2D34]/70 mt-4 text-lg max-w-2xl mx-auto">
           Próximamente
          </p>
        </div>
      </div>
    </section>
  );
}
