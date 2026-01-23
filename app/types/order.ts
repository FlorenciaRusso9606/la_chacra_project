export type OrderStatus = "paid" | "pending" | "canceled";

export type Order = {
  id: number;
  customerName: string;
  total: number;
  status: OrderStatus;
};
