"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Form from "../components/Form/Form";

export default function Contacto() {
  return (
    <section className="relative flex flex-col justify-center items-center py-12 bg-[#fdf8f5]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl px-6"
      >
        <h2 className="text-3xl font-bold text-[#b01a2f] mb-4 text-center">
          Contactanos
        </h2>
        <p className="text-gray-700 text-center mb-12">
          Escribinos y te responderemos a la brevedad 🍓
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center gap-3 text-center mb-8">
            <div className="text-[#b01a2f] font-semibold flex items-center gap-2 hover:text-[#9bcb88] transition-colors">
              <Phone size={20} /> <p>+54 2984 212785</p>
            </div>
            <div className="text-[#b01a2f] font-semibold flex items-center gap-2 hover:text-[#9bcb88] transition-colors">
              <Mail size={20} /> <p>lachacra74@gmail.com</p>
            </div>
            <div className="text-[#b01a2f] font-semibold flex items-center gap-2 hover:text-[#9bcb88] transition-colors">
              <MapPin size={20} /> <p>Valle de Río Negro, Argentina</p>
            </div>
          </div>

          <Form />
        </div>
      </motion.div>
    </section>
  );
}
