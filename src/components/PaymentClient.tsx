"use client";

import dynamicImport from "next/dynamic";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, Zap } from "lucide-react";

const QRCodeComponent = dynamicImport(
  () => import("qrcode.react").then(mod => ({ default: mod.QRCodeCanvas })),
  { ssr: false }
);

interface PaymentClientProps {
  totalPrice: string;
  itemCount: string;
}

export default function PaymentClient({ totalPrice, itemCount }: PaymentClientProps) {
  const router = useRouter();
  const qrValue = `luma-payment-${Date.now()}`;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#FAFAF8" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50"
        style={{ background: "#4A3527" }}
      >
        <div className="max-w-md mx-auto px-5 py-4 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full transition hover:bg-white/10"
          >
            <ArrowLeft size={24} color="#FAFAF8" />
          </button>
          <h1 className="font-sora text-lg font-bold" style={{ color: "#FAFAF8" }}>
            Pembayaran
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-5 md:p-6">
        <div className="w-full max-w-md">
          {/* Total Price */}
          <div className="text-center mb-8">
            <p className="mb-2" style={{ color: "#6F6C66" }}>Total Pembayaran</p>
            <p className="font-sora text-4xl md:text-5xl font-bold" style={{ color: "#D97757" }}>
              Rp {parseInt(totalPrice).toLocaleString()}
            </p>
            <p className="text-sm mt-2" style={{ color: "#8B887F" }}>{itemCount} item</p>
          </div>

          {/* QR Code */}
          <div
            className="rounded-2xl p-8 mb-8 flex items-center justify-center"
            style={{ background: "#FFFFFF", border: "2px solid #E5E3DD" }}
          >
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
          <div
            className="rounded-2xl p-4 mb-8"
            style={{ background: "#F5F1EA", border: "1px solid #E5E3DD" }}
          >
            <p className="text-sm" style={{ color: "#4A3527" }}>
              Scan QR code di atas menggunakan aplikasi pembayaran Anda untuk menyelesaikan transaksi.
            </p>
          </div>

          {/* Info */}
          <div className="space-y-3 mb-8">
            <div
              className="flex items-center gap-3 p-3 rounded-2xl"
              style={{ background: "#FFFFFF", border: "1px solid #EEEDE7" }}
            >
              <div
                className="flex items-center justify-center h-8 w-8 rounded-md text-white flex-shrink-0"
                style={{ background: "#D97757" }}
              >
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#1C1C1A" }}>Aman</p>
                <p className="text-xs" style={{ color: "#8B887F" }}>Transaksi terenkripsi</p>
              </div>
            </div>

            <div
              className="flex items-center gap-3 p-3 rounded-2xl"
              style={{ background: "#FFFFFF", border: "1px solid #EEEDE7" }}
            >
              <div
                className="flex items-center justify-center h-8 w-8 rounded-md text-white flex-shrink-0"
                style={{ background: "#D97757" }}
              >
                <Zap size={18} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#1C1C1A" }}>Cepat</p>
                <p className="text-xs" style={{ color: "#8B887F" }}>Pembayaran instan</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => router.push(`/delivery?total=${totalPrice}&items=${itemCount}`)}
              className="w-full text-white py-3 rounded-xl font-semibold transition"
              style={{ background: "#D97757" }}
            >
              Pembayaran Selesai
            </button>
            <button
              onClick={() => router.back()}
              className="w-full py-3 rounded-xl font-semibold transition"
              style={{ background: "#FFFFFF", border: "1.5px solid #E5E3DD", color: "#1C1C1A" }}
            >
              Kembali ke Keranjang
            </button>
          </div>

          {/* Help Text */}
          <p className="text-xs text-center mt-6" style={{ color: "#8B887F" }}>
            Butuh bantuan? Hubungi customer service kami
          </p>
        </div>
      </main>
    </div>
  );
}
