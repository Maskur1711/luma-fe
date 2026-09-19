import type { CartItem } from "@/types";

const WHATSAPP_NUMBER = "6289513990786";

export function generateOrderId() {
  return `LUMA-${Date.now().toString().slice(-6)}`;
}

export function buildInvoiceMessage(cartItems: CartItem[], total: number, orderId: string) {
  const dateLabel = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const lines = [
    "*INVOICE LUMA*",
    `No. Order: ${orderId}`,
    `Tanggal: ${dateLabel}`,
    "",
    ...cartItems.map(
      (item) =>
        `${item.name} x${item.quantity} - Rp ${(item.price * item.quantity).toLocaleString()}`
    ),
    "",
    `Total: Rp ${total.toLocaleString()}`,
    "",
    "Mohon konfirmasi pembayaran ini. Terima kasih!",
  ];

  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
