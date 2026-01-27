"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "@/app/types/product";

type CartItem = Product & { quantity: number };

type CartContextType = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;

  addToCart: (product: Product) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;

  open: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

 
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

 
  const addToCart = (product: Product) => {
  if (product.stock <= 0) return;

  setItems(prev => {
    const existing = prev.find(p => p.id === product.id);

    if (existing) {
      if (existing.quantity >= product.stock) {
        return prev; // no se pasa del stock
      }

      return prev.map(p =>
        p.id === product.id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
    }

    return [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ];
  });

  setOpen(true);
};

const increase = (id: number) => {
  setItems(prev =>
    prev.map(p => {
      if (p.id !== id) return p;
      if (p.quantity >= p.stock) return p;

      return { ...p, quantity: p.quantity + 1 };
    })
  );
};


  const decrease = (id: number) => {
    setItems(prev =>
      prev
        .map(p =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter(p => p.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(p => p.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);


  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);
  const totalPrice = items.reduce(
    (acc, i) => acc + i.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrice,
        addToCart,
        increase,
        decrease,
        removeItem,
        clearCart,
        open,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
}
