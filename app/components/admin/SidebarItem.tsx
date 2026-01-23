"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
  label: string;
  href: string;
  icon: React.ElementType;
};

export function SidebarItem({
  label,
  href,
  icon: Icon,
}: SidebarItemProps) {
  const pathname = usePathname();
  const active = pathname.startsWith(href);

  const baseClasses =
    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition";

  const stateClasses = active
    ? "bg-green-200 text-green-800 font-medium"
    : "text-green-700 hover:bg-green-100";

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`${baseClasses} ${stateClasses}`}
    >
      <Icon size={18} aria-hidden />
      <span>{label}</span>
    </Link>
  );
}
