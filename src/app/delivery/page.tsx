import { ArrowLeft, CheckCircle, Cog, Truck, Home, Phone, Star } from "lucide-react";
import Link from "next/link";
import DeliveryAnimation from "@/components/delivery/DeliveryAnimation";

interface PageProps {
  searchParams: Promise<{
    total?: string;
    items?: string;
  }>;
}

const statusSteps = [
  { status: "Pesanan Dikonfirmasi", Icon: CheckCircle },
  { status: "Sedang Diproses", Icon: Cog },
  { status: "Dalam Perjalanan", Icon: Truck },
  { status: "Sudah Tiba", Icon: Home },
];

export default async function DeliveryPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const totalPrice = parseInt(params.total || "0");
  const itemCount = params.items || "0";
  const currentStep = 2; // Dalam Perjalanan

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-brand-brown">
        <div className="max-w-md mx-auto px-5 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 rounded-full transition hover:bg-white/10">
            <ArrowLeft size={24} className="text-brand-bg" />
          </Link>
          <h1 className="font-sora text-lg font-bold text-brand-bg">Status Pengiriman</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-5 md:p-6">
        <div className="w-full max-w-md">
          {/* Order Info */}
          <div className="rounded-2xl p-6 mb-8 bg-white border border-brand-border-light">
            <p className="mb-2 text-brand-muted">Total Pesanan</p>
            <p className="font-sora text-4xl md:text-5xl font-bold mb-4 text-brand-accent">
              Rp {totalPrice.toLocaleString()}
            </p>
            <p className="text-sm text-brand-muted-light">
              {itemCount} item akan sampai dalam 30-45 menit
            </p>
          </div>

          {/* Delivery Animation */}
          <div className="mb-8">
            <DeliveryAnimation />
          </div>

          {/* Status Steps */}
          <div className="mb-8">
            <h2 className="font-sora text-lg font-bold mb-6 text-brand-ink">
              Riwayat Pengiriman
            </h2>

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
                          index < currentStep ? "bg-brand-accent" : "bg-brand-border"
                        }`}
                      ></div>
                    )}

                    {/* Status circle with icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isActive ? "bg-brand-accent-soft" : "bg-brand-muted-bg"
                      }`}
                    >
                      <Icon size={24} className={isActive ? "text-brand-accent" : "text-brand-muted-icon"} />
                    </div>

                    {/* Status info */}
                    <div className="flex-1 pt-1">
                      <p
                        className={`font-semibold transition-colors ${
                          isActive ? "text-brand-ink" : "text-brand-muted-icon"
                        }`}
                      >
                        {step.status}
                      </p>
                      {index === currentStep && (
                        <p className="text-sm font-medium text-brand-accent">Sedang berlangsung</p>
                      )}
                      {index < currentStep && (
                        <p className="text-sm text-brand-success">Selesai</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Driver Info */}
          <div className="rounded-2xl p-6 mb-8 bg-brand-surface border border-brand-border">
            <h3 className="font-sora font-bold mb-4 text-brand-ink">Informasi Kurir</h3>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 bg-brand-accent">
                EK
              </div>
              <div className="flex-1">
                <p className="font-semibold text-brand-ink">Eko Prasetyo</p>
                <div className="flex items-center gap-1 text-sm text-brand-muted">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1">4.9/5</span>
                </div>
                <p className="text-sm mt-2 flex items-center gap-2 text-brand-muted">
                  <Phone size={14} />
                  +62 812-3456-7890
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full text-white py-3 rounded-xl font-semibold transition bg-brand-accent">
              Hubungi Kurir
            </button>
            <Link
              href="/"
              className="w-full py-3 rounded-xl font-semibold transition text-center block bg-white border-[1.5px] border-brand-border text-brand-ink"
            >
              Kembali ke Home
            </Link>
          </div>

          {/* Support */}
          <p className="text-xs text-center mt-6 text-brand-muted-light">
            Butuh bantuan? Hubungi customer service kami
          </p>
        </div>
      </main>
    </div>
  );
}
