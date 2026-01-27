"use client";

import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./AuthProvider";
import { CartProvider } from "./CartProvider";
import { CartDrawer } from "../components/CartDrawer";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <AuthProvider>
        <CartProvider>
          {children}
          <Toaster position="top-center" />
          <CartDrawer/>g
          </CartProvider>
      </AuthProvider>
  );
}
