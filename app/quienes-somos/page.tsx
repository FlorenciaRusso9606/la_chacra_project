"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function QuienesSomos() {
  return (
    <section className="flex flex-col items-center py-16 bg-[#fdf9f8] overflow-x-hidden w-full">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#b01a2f] mb-10 text-center"
      >
        Quiénes Somos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-3xl text-center text-gray-700 mb-10"
      >
        Nacimos en el corazón del Valle de Río Negro, donde la tierra fértil y el
        clima patagónico dan vida a frutas únicas. Desde nuestras raíces,
        cultivamos con amor y respeto por la naturaleza, cuidando cada detalle
        para que el sabor auténtico llegue a tu mesa.
      </motion.p>

      {/* Bloque 1 - El Valle */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row items-center gap-8 mb-12 max-w-5xl"
      >
        <div className="md:w-1/2">
          <Image
            src="/images/quienes-somos/el-valle.jpg"
            alt="Valle de Río Negro"
            width={400}
            height={200}
            className="rounded-2xl shadow-md"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-[#9bcb88] mb-3">
            Desde el Valle
          </h3>
          <p className="text-gray-700">
            Nuestra historia comienza en el Valle, donde las flores anuncian el
            inicio de cada cosecha. Trabajamos la tierra con dedicación, dejando
            que el sol y el viento hagan su magia.
          </p>
        </div>
      </motion.div>

      {/* Bloque 2 - La Flor */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12 max-w-5xl"
      >
        <div className="md:w-1/2">
          <Image
            src="/images/quienes-somos/red-delicious.jpg"
            alt="Flor del fruto"
            width={600}
            height={400}
            className="rounded-2xl shadow-md"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-[#e1ac48] mb-3">
            La Flor
          </h3>
          <p className="text-gray-700">
            Cada flor representa la promesa de un fruto. Cuidamos los tiempos
            naturales, sin apurar la tierra, para mantener la pureza y la esencia
            de lo artesanal.
          </p>
        </div>
      </motion.div>

      {/* Bloque 3 - La Fruta */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-8 max-w-5xl text-center"
      >
        <h3 className="text-2xl font-semibold text-[#95cad3] mb-3">
          La Fruta
        </h3>
        <p className="text-gray-700 max-w-3xl">
          Cosechamos a mano, seleccionando solo los mejores frutos. Luego los
          transformamos en dulces naturales que conservan el alma del valle.
        </p>

        {/* Grilla animada de imágenes */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            "acequia5.jpg",
            "chacra-escalera.jpg",
            "manzana-granny.jpg",
            "cajon-manzana-oro.jpg",
            "fotos-verticales3.jpg",
            "higos.jpg",
            "duraznos.jpg",
            "frutillas.jpg",
          ].map((img, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={`/images/quienes-somos/${img}`}
                alt={img}
                width={700}
                height={1000}
                className="rounded-xl shadow-md object-cover w-full h-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
