"use client";

import { Package, ShoppingCart } from "lucide-react";
import { useAuth } from "../../providers/AuthProvider";
import { Button } from "../ui/Button";
import { SidebarItem } from "./SidebarItem";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  {
    label: "Órdenes",
    href: "/dashboard-lch-2026/orders",
    icon: ShoppingCart,
  },
  {
    label: "Productos",
    href: "/dashboard-lch-2026/products",
    icon: Package,
  },
];

export function AdminSidebar() {
  const { logout } = useAuth();

  return (
    <aside
      aria-label="Menú de administración"
      className="w-64 bg-white border-r border-green-200 px-4 py-6"
    >
      <h1 className="text-lg font-semibold text-green-700 mb-8">
        La Chacra · Admin
      </h1>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </nav>

      <div className="mt-10">
        <Button
          label="Cerrar sesión"
          onClick={logout}
          className="w-full text-sm bg-red-500 hover:bg-red-600 text-white"
        />
      </div>
    </aside>
  );
}
