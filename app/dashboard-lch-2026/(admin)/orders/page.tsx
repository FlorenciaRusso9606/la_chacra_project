"use client";

import { useEffect, useState } from "react";
import api from "@/app/lib/axios";
import { OrdersTable } from "./components/OrdersTable";
import { Loader } from "@/app/components/ui/Loader";
import { Order } from "../../../types/order";

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/orders")
      .then((res) => setOrders(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader text="Cargando órdenes" loading />;
  }

  return (
    <section>
      <h1 className="text-xl font-bold mb-4">Órdenes</h1>
      <OrdersTable orders={orders} />
    </section>
  );
}
