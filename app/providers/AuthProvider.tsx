"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import api from "../lib/axios";
import type { Admin } from "../types/admin";

type AuthContextType = {
  user: Admin | null;
  loading: boolean;
  setAdmin: (user: Admin | null) => void;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUserState] = useState<Admin | null>(null);
  const [loading, setLoading] = useState(true);

  const setAdmin = (admin: Admin | null) => {
    if (!admin) return setUserState(null);
    try {
      setUserState(admin);
    } catch {
      setUserState(admin);
    }
  };
  useEffect(() => {
  let mounted = true;

  const fetchUser = async () => {
    try {
      const res = await api.get<Admin>("/auth/me-proxy");

      if (!mounted) return;
      setAdmin(res.data);
    } catch {
      if (!mounted) return;
      setAdmin(null);
    } finally {
      if (!mounted) return;
      setLoading(false);
    }
  };

  fetchUser();

  return () => {
    mounted = false;
  };
}, []);


  const logout = async () => {
    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
      setAdmin(null);
      toast.success("Sesión cerrada");
      router.push("/dashboard-lch-2026/login");
    } catch {
      setAdmin(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, setAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe estar dentro de AuthProvider");
  return ctx;
}
