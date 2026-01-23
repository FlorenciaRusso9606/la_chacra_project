import { Order } from "../../../../types/order";
import { OrderRow } from "./OrderRow";

type Props = {
  orders: Order[];
};

export function OrdersTable({ orders }: Props) {
  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-green-100">
          <th>ID</th>
          <th>Cliente</th>
          <th>Total</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </tbody>
    </table>
  );
}
