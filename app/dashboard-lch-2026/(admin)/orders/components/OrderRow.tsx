import { Order } from "../../../../types/order";
import { OrderStatusBadge } from "./OrderStatusBadge";

type Props = {
  order: Order;
};

export function OrderRow({ order }: Props) {
  return (
    <tr className="border-t">
      <td>{order.id}</td>
      <td>{order.customerName}</td>
      <td>${order.total}</td>
      <td>
        <OrderStatusBadge status={order.status} />
      </td>
    </tr>
  );
}
