import { OrderStatus } from "../../../../types/order";

type Props = {
  status: OrderStatus;
};

const styles: Record<OrderStatus, string> = {
  paid: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  canceled: "bg-red-100 text-red-800",
};

export function OrderStatusBadge({ status }: Props) {
  return (
    <span className={`px-2 py-1 rounded text-xs ${styles[status]}`}>
      {status}
    </span>
  );
}
