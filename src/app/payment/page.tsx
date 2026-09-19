"use client";

import dynamicImport from "next/dynamic";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const QRCodeComponent = dynamicImport(
  () => import("qrcode.react").then(mod => ({ default: mod.QRCodeCanvas })),
  { ssr: false }
);

interface PageProps {
  searchParams: {
    total?: string;
    items?: string;
  };
}

export default function PaymentPage({ searchParams }: PageProps) {
  const router = useRouter();
  const totalPrice = searchParams.total || "0";
  const itemCount = searchParams.items || "0";

  const qrValue = `luma-payment-${Date.now()}`;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Pembayaran</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-md">
          {/* Total Price */}
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">Total Pembayaran</p>
            <p className="text-4xl md:text-5xl font-bold text-[#EC6530]">
              Rp {parseInt(totalPrice).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-2">{itemCount} item</p>
          </div>

          {/* QR Code */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 mb-8 flex items-center justify-center">
            <QRCodeComponent
              value={qrValue}
              size={280}
              level="H"
              includeMargin={true}
              fgColor="#000000"
              bgColor="#ffffff"
            />
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-blue-900">
              Scan QR code di atas menggunakan aplikasi pembayaran Anda untuk menyelesaikan transaksi.
            </p>
          </div>

          {/* Info */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#EC6530] text-white text-sm font-bold">
                  ✓
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Aman</p>
                <p className="text-xs text-gray-600">Transaksi terenkripsi</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#EC6530] text-white text-sm font-bold">
                  ⚡
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Cepat</p>
                <p className="text-xs text-gray-600">Pembayaran instan</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => router.push(`/delivery?total=${totalPrice}&items=${itemCount}`)}
              className="w-full bg-[#EC6530] text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Pembayaran Selesai
            </button>
            <button
              onClick={() => router.back()}
              className="w-full bg-white border border-gray-300 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Kembali ke Keranjang
            </button>
          </div>

          {/* Help Text */}
          <p className="text-xs text-gray-500 text-center mt-6">
            Butuh bantuan? Hubungi customer service kami
          </p>
        </div>
      </main>
    </div>
  );
}
