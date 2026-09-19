import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import DeliveryAnimation from "@/components/DeliveryAnimation";

interface PageProps {
  searchParams: {
    total?: string;
    items?: string;
  };
}

const statusSteps = [
  { status: "Pesanan Dikonfirmasi", icon: "✓", color: "bg-green-100", textColor: "text-green-700" },
  { status: "Sedang Diproses", icon: "⚙", color: "bg-blue-100", textColor: "text-blue-700" },
  { status: "Dalam Perjalanan", icon: "🚛", color: "bg-yellow-100", textColor: "text-yellow-700" },
  { status: "Sudah Tiba", icon: "✓", color: "bg-purple-100", textColor: "text-purple-700" },
];

export default function DeliveryPage({ searchParams }: PageProps) {
  const totalPrice = searchParams.total || "0";
  const itemCount = searchParams.items || "0";
  const currentStep = 2; // Dalam Perjalanan

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition">
            <ArrowLeft size={24} className="text-gray-700" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Status Pengiriman</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-2xl">
          {/* Order Info */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-2">Total Pesanan</p>
            <p className="text-4xl md:text-5xl font-bold text-[#EC6530] mb-4">
              Rp {parseInt(totalPrice).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">{itemCount} item akan sampai dalam 30-45 menit</p>
          </div>

          {/* Delivery Animation */}
          <div className="mb-8">
            <DeliveryAnimation />
          </div>

          {/* Status Steps */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Riwayat Pengiriman</h2>

            <div className="space-y-4">
              {statusSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  {/* Circle */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all ${
                    index <= currentStep ? step.color + " " + step.textColor : "bg-gray-100 text-gray-400"
                  }`}>
                    {step.icon}
                  </div>

                  {/* Status Info */}
                  <div className="flex-1">
                    <p className={`font-semibold transition-colors ${
                      index <= currentStep ? "text-gray-900" : "text-gray-400"
                    }`}>
                      {step.status}
                    </p>
                    {index === currentStep && (
                      <p className="text-sm text-[#EC6530] font-medium">Sedang berlangsung</p>
                    )}
                    {index < currentStep && (
                      <p className="text-sm text-green-600">Selesai</p>
                    )}
                  </div>

                  {/* Line connector */}
                  {index < statusSteps.length - 1 && (
                    <div className={`absolute left-6 h-12 w-1 ${
                      index < currentStep ? "bg-green-500" : "bg-gray-200"
                    }`} style={{
                      marginTop: "3rem"
                    }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Driver Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Informasi Kurir</h3>
            <div className="flex items-center gap-4">
              <div className="text-5xl">👨‍💼</div>
              <div>
                <p className="font-semibold text-gray-900">Eko Prasetyo</p>
                <p className="text-sm text-gray-600">Rating: ⭐⭐⭐⭐⭐ (4.9/5)</p>
                <p className="text-sm text-gray-600 mt-2">Nomor HP: +62 812-3456-7890</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-[#EC6530] text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Hubungi Kurir
            </button>
            <Link
              href="/"
              className="w-full bg-white border border-gray-300 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-50 transition text-center"
            >
              Kembali ke Home
            </Link>
          </div>

          {/* Support */}
          <p className="text-xs text-gray-500 text-center mt-6">
            Butuh bantuan? Hubungi customer service kami
          </p>
        </div>
      </main>
    </div>
  );
}
