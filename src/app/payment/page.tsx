import PaymentClient from "@/components/PaymentClient";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    total?: string;
    items?: string;
  }>;
}

export default async function PaymentPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const totalPrice = params.total || "0";
  const itemCount = params.items || "0";

  return <PaymentClient totalPrice={totalPrice} itemCount={itemCount} />;
}
