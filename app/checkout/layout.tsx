import { CheckoutHeader } from "@/app/components/CheckoutHeader";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CheckoutHeader />
      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}
