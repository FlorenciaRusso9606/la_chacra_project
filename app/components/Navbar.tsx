"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/providers/CartProvider";
import { Button } from "./ui/Button";
export const Navbar = () => {
  const [open, setOpen] = useState(false)
const { items, openCart } = useCart();

const totalItems = items.reduce(
  (acc, item) => acc + item.quantity,
  0
);

  return (
  
<nav className="
  relative
  flex
  items-center
 bg-[#F9F9F8]/90 backdrop-blur-sm text-[#2A2D34] px-6 shadow-sm border-b border-[#AEE4EA]/40 min-h-20 z-50

">
  {/* IZQUIERDA */}
  <div className="flex-1 flex items-center">
 <Button
        onClick={() => setOpen(!open)}
        className="absolute left-4 md:hidden text-[#2C3E2F] focus:outline-none cursor-pointer z-70"
      >
        {open ? <X size={30} /> : <Menu size={30} />}
      </Button>
  </div>

  {/* CENTRO */}
  <div className="hidden md:flex items-center gap-10 font-medium">
    <Link href="/">Inicio</Link>
    <Link href="/quienes-somos">Quiénes Somos</Link>

    <a href="/">
      <img
        src="/images/logotipo.png"
        alt="Logo"
        className="h-10 w-auto"
      />
    </a>

    <Link href="/productos">Productos</Link>
    <Link href="/contacto">Contacto</Link>
  </div>

  {/* DERECHA */}
  <div className="flex-1 flex justify-end items-center">
    <Button
      onClick={openCart}
      className="relative"
      aria-label="Abrir carrito"
    >
    
      <ShoppingCart size={22} />

      {totalItems > 0 && (
        <span className="
          absolute
          -top-1
          -right-1
          bg-[#b01a2f]
          text-white
          text-xs
          w-5
          h-5
          rounded-full
          flex
          items-center
          justify-center
          font-semibold
        ">
          {totalItems}
        </span>
      )}
    </Button>
  </div>
 <div
  className={`fixed top-0 left-0 w-full h-screen
  bg-[#F9F9F8] text-[#2C3E2F] font-medium
  flex flex-col items-center justify-center gap-8 text-lg
  transition-all duration-300 ease-in-out z-50 ${
    open ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
>
        <Link href="/" onClick={() => setOpen(false)}>
          <span className="relative pb-1 after:bg-[#b01a2f] hover:text-[#b01a2f] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition-colors font-semibold">Inicio</span>
        </Link>
        <Link href="/quienes-somos" onClick={() => setOpen(false)}>
          <span className="relative pb-1 after:bg-[#b01a2f] hover:text-[#b01a2f] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition-colors font-semibold">Quiénes Somos</span>
        </Link>
        <Link href="/productos" onClick={() => setOpen(false)}>
          <span className="relative pb-1 after:bg-[#b01a2f] hover:text-[#b01a2f] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition-colors font-semibold">Productos</span>
        </Link>
        <Link href="/contacto" onClick={() => setOpen(false)}>
          <span className="relative pb-1 after:bg-[#b01a2f] hover:text-[#b01a2f] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition-colors font-semibold">Contacto</span>
        </Link>
   


      </div>
</nav>

)

}
/* /* <nav className="flex relative  sm:justify-between lg:justify-center items-center bg-[#F9F9F8]/90 backdrop-blur-sm text-[#2A2D34] px-6 shadow-sm border-b border-[#AEE4EA]/40 min-h-20 z-50">
      {/* BOTÓN MENÚ (solo visible en mobile) */
     /* <div className="justify-between lg:justify-center flex-1">
      <Button
        onClick={() => setOpen(!open)}
        className="absolute left-4 md:hidden text-[#2C3E2F] focus:outline-none cursor-pointer z-70"
      >
        {open ? <X size={30} /> : <Menu size={30} />}
      </Button>
            <a href="/" className="flex justify-center items-center">
        <img
          src="/images/logotipo.png"
          alt="Logo La Chacra"
          className="h-10 w-auto mx-4 flex md:hidden"
        />
      </a>
      </div>
      {/* LINKS DESKTOP }
      /*<div className="hidden md:flex items-center justify-center gap-10 font-medium">
        <Link href="/">
          <span className="relative pb-1 after:bg-[#b01a2f] hover:text-[#b01a2f] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition-colors font-semibold">
            Inicio
          </span>
        </Link>

        <Link href="/quienes-somos">
          <span className="relative pb-1 after:bg-[#b01a2f] hover:text-[#b01a2f] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition-colors font-semibold">
            Quiénes Somos
          </span>
        </Link>

        {/* LOGO CENTRADO }
       /* <a href="/">
          <img src="/images/logotipo.png" alt="Logo La Chacra" className="h-10 w-auto mx-4 hidden md:flex" />
        </a>

        <Link href="/productos">
          <span className="relative pb-1 after:bg-[#b01a2f] hover:text-[#b01a2f] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition-colors font-semibold">
            Productos
          </span>
        </Link>

        <Link href="/contacto">
          <span className="relative pb-1 after:bg-[#b01a2f] hover:text-[#b01a2f] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition-colors font-semibold">
            Contacto
          </span>
        </Link>
    </div>

      {/* MENÚ MÓVIL }
      /*<div
      className={`fixed top-0 left-0 w-full h-screen bg-[#F9F9F8] text-[#2C3E2F] font-medium flex flex-col items-center space-y-6 justify-center gap-8 text-lg transition-all duration-300 ease-in-out z-50 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <span className="relative pb-1 after:bg-[#b01a2f] hover:text-[#b01a2f] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition-colors font-semibold">Inicio</span>
        </Link>
        <Link href="/quienes-somos" onClick={() => setOpen(false)}>
          <span className="relative pb-1 after:bg-[#b01a2f] hover:text-[#b01a2f] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition-colors font-semibold">Quiénes Somos</span>
        </Link>
        <Link href="/productos" onClick={() => setOpen(false)}>
          <span className="relative pb-1 after:bg-[#b01a2f] hover:text-[#b01a2f] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition-colors font-semibold">Productos</span>
        </Link>
        <Link href="/contacto" onClick={() => setOpen(false)}>
          <span className="relative pb-1 after:bg-[#b01a2f] hover:text-[#b01a2f] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer transition-colors font-semibold">Contacto</span>
        </Link>
   


      </div>
      <Button
  onClick={openCart}
  className="relative cursor-pointer"
  aria-label="Abrir carrito"
>
  <ShoppingCart size={22} />

  {totalItems > 0 && (
    <span className="
      absolute
      -top-1
      -right-1
      bg-[#b01a2f]
      text-white
      text-xs
      w-5
      h-5
      rounded-full
      flex
      items-center
      justify-center
      font-semibold
    ">
      {totalItems}
    </span>
  )}
</Button>

    </nav>*/