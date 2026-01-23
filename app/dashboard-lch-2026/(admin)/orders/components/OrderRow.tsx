import { Order } from "../../../../types/order";
import { OrderStatusBadge } from "./OrderStatusBadge";

type Props = {
  order: Order;
};

export function OrderRow({ order }: Props) {
  return (
    <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
      <td className="px-4 py-3 font-medium text-gray-900">{order.id}</td>
      <td className="px-4 py-3 text-gray-900">{order.customerName}</td>
      <td className="px-4 py-3 text-gray-700">${order.total}</td>
      <td>
        <OrderStatusBadge status={order.status} />
      </td>
    </tr>
  );
}
