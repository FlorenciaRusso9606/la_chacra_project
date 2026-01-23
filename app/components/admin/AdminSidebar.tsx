"use client";

import { LayoutDashboard, Package, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../../providers/AuthProvider";
import { Button } from "../ui/Button";

const navItems = [
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
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <aside className="w-64 bg-white border-r border-green-200 px-4 py-6">
      <h1 className="text-lg font-semibold text-green-700 mb-8">
        La Chacra · Admin
      </h1>

      <nav className="space-y-2">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition
                ${
                  active
                    ? "bg-green-200 text-green-800 font-medium"
                    : "text-green-700 hover:bg-green-100"
                }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>

      <Button
        label="Cerrar sesión"
        onClick={logout}
        className="mt-10 text-sm text-red-600 hover:underline bg-transparent px-0"
      />
    </aside>
  );
}
