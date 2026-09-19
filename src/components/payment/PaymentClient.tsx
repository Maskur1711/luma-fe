"use client";

import dynamicImport from "next/dynamic";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, Zap } from "lucide-react";
import type { CartItem } from "@/types";
import { buildInvoiceMessage, buildWhatsAppUrl, generateOrderId } from "@/lib/invoice";

const QRCodeComponent = dynamicImport(
  () => import("qrcode.react").then((mod) => ({ default: mod.QRCodeCanvas })),
  { ssr: false }
);

interface PaymentClientProps {
  totalPrice: string;
  itemCount: string;
  cartItems: CartItem[];
}

export default function PaymentClient({ totalPrice, itemCount, cartItems }: PaymentClientProps) {
  const router = useRouter();
  const qrValue = `luma-payment-${Date.now()}`;

  const handlePaymentComplete = () => {
    const message = buildInvoiceMessage(cartItems, parseInt(totalPrice), generateOrderId());
    window.open(buildWhatsAppUrl(message), "_blank");
    router.push(`/delivery?total=${totalPrice}&items=${itemCount}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-brand-brown">
        <div className="max-w-md mx-auto px-5 py-4 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full transition hover:bg-white/10"
          >
            <ArrowLeft size={24} className="text-brand-bg" />
          </button>
          <h1 className="font-sora text-lg font-bold text-brand-bg">Pembayaran</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-5 md:p-6">
        <div className="w-full max-w-md">
          {/* Total Price */}
          <div className="text-center mb-8">
            <p className="mb-2 text-brand-muted">Total Pembayaran</p>
            <p className="font-sora text-4xl md:text-5xl font-bold text-brand-accent">
              Rp {parseInt(totalPrice).toLocaleString()}
            </p>
            <p className="text-sm mt-2 text-brand-muted-light">{itemCount} item</p>
          </div>

          {/* QR Code */}
          <div className="rounded-2xl p-8 mb-8 flex items-center justify-center bg-white border-2 border-brand-border">
            <QRCodeComponent
              value={qrValue}
              size={280}
              level="H"
              includeMargin={true}
              fgColor="#1C1C1A"
              bgColor="#ffffff"
            />
          </div>

          {/* Instructions */}
          <div className="rounded-2xl p-4 mb-8 bg-brand-surface border border-brand-border">
            <p className="text-sm text-brand-brown">
              Scan QR code di atas menggunakan aplikasi pembayaran Anda untuk menyelesaikan transaksi.
            </p>
          </div>

          {/* Info */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-brand-border-light">
              <div className="flex items-center justify-center h-8 w-8 rounded-md text-white flex-shrink-0 bg-brand-accent">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-ink">Aman</p>
                <p className="text-xs text-brand-muted-light">Transaksi terenkripsi</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-brand-border-light">
              <div className="flex items-center justify-center h-8 w-8 rounded-md text-white flex-shrink-0 bg-brand-accent">
                <Zap size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-ink">Cepat</p>
                <p className="text-xs text-brand-muted-light">Pembayaran instan</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handlePaymentComplete}
              className="w-full text-white py-3 rounded-xl font-semibold transition bg-brand-accent"
            >
              Pembayaran Selesai
            </button>
            <button
              onClick={() => router.back()}
              className="w-full py-3 rounded-xl font-semibold transition bg-white border-[1.5px] border-brand-border text-brand-ink"
            >
              Kembali ke Keranjang
            </button>
          </div>

          {/* Help Text */}
          <p className="text-xs text-center mt-6 text-brand-muted-light">
            Butuh bantuan? Hubungi customer service kami
          </p>
        </div>
      </main>
    </div>
  );
}
