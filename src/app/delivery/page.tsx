import { ArrowLeft, CheckCircle, Cog, Truck, Home, Phone, Star } from "lucide-react";
import Link from "next/link";
import DeliveryAnimation from "@/components/DeliveryAnimation";

interface PageProps {
  searchParams: {
    total?: string;
    items?: string;
  };
}

const statusSteps = [
  { status: "Pesanan Dikonfirmasi", Icon: CheckCircle, color: "bg-green-100", textColor: "text-green-700", iconColor: "text-green-700" },
  { status: "Sedang Diproses", Icon: Cog, color: "bg-blue-100", textColor: "text-blue-700", iconColor: "text-blue-700" },
  { status: "Dalam Perjalanan", Icon: Truck, color: "bg-amber-100", textColor: "text-amber-700", iconColor: "text-amber-700" },
  { status: "Sudah Tiba", Icon: Home, color: "bg-purple-100", textColor: "text-purple-700", iconColor: "text-purple-700" },
];

export default function DeliveryPage({ searchParams }: PageProps) {
  const totalPrice = parseInt(searchParams.total || "0");
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
              Rp {totalPrice.toLocaleString()}
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
              {statusSteps.map((step, index) => {
                const Icon = step.Icon;
                const isActive = index <= currentStep;

                return (
                  <div key={index} className="flex items-start gap-4 relative">
                    {/* Connecting line */}
                    {index < statusSteps.length - 1 && (
                      <div
                        className={`absolute left-6 top-12 w-1 h-8 ${
                          index < currentStep ? "bg-[#EC6530]" : "bg-gray-200"
                        }`}
                      ></div>
                    )}

                    {/* Status circle with icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      isActive ? step.color : "bg-gray-100"
                    }`}>
                      <Icon size={24} className={isActive ? step.iconColor : "text-gray-400"} />
                    </div>

                    {/* Status info */}
                    <div className="flex-1 pt-1">
                      <p className={`font-semibold transition-colors ${
                        isActive ? "text-gray-900" : "text-gray-400"
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* Driver Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Informasi Kurir</h3>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#EC6530] flex items-center justify-center text-white text-2xl font-bold">
                EK
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Eko Prasetyo</p>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                  <Phone size={14} />
                  +62 812-3456-7890
                </p>
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
              className="w-full bg-white border border-gray-300 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-50 transition text-center block"
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
