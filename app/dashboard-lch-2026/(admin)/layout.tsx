"use client";

import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "../../components/admin/AdminSidebar";
import { Loader } from "../../components/ui/Loader";
import { Navbar } from "@/app/components/Navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/dashboard-lch-2026/login");
    }
  }, [loading, user, router]);



  if (!user) {
    return null;
  }



  return (
    <div className="flex min-h-screen">

      <AdminSidebar />

      <main className="flex-1 p-6">
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <Loader text="Cargando" loading />
          </div>
        ) : (
          children
        )}
      </main>

    </div>
  );
}
