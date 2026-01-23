import { Order } from "../../../../types/order";
import { OrderRow } from "./OrderRow";

type Props = {
  orders: Order[];
};

export function OrdersTable({ orders }: Props) {
  return (
     <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
    <table className="w-full text-sm">
      <thead className="bg-gray-50 border-b">
        <tr className="text-left text-gray-600">
          <th  className="px-4 py-3 font-medium">ID</th>
          <th  className="px-4 py-3 font-medium">Cliente</th>
          <th  className="px-4 py-3 font-medium">Total</th>
          <th  className="px-4 py-3 font-medium">Estado</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </tbody>
    </table>
     {orders.length === 0 && (
        <div className="p-6 text-center text-sm text-gray-500">
          No hay órdenes cargadas
        </div>
      )}
    </div>
  );
}
