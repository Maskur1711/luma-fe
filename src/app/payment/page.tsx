import PaymentClient from "@/components/payment/PaymentClient";
import type { CartItem } from "@/types";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    total?: string;
    items?: string;
    cart?: string;
  }>;
}

export default async function PaymentPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const totalPrice = params.total || "0";
  const itemCount = params.items || "0";

  let cartItems: CartItem[] = [];
  if (params.cart) {
    try {
      cartItems = JSON.parse(params.cart);
    } catch {
      cartItems = [];
    }
  }

  return <PaymentClient totalPrice={totalPrice} itemCount={itemCount} cartItems={cartItems} />;
}
