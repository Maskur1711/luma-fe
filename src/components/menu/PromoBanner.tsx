import { ChevronRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="mx-5 mt-3.5 rounded-2xl p-3.5 flex items-center justify-between bg-white border-[1.5px] border-brand-border">
      <div className="flex flex-col gap-0.5">
        <p className="font-sora text-[14.5px] font-semibold text-brand-ink">
          Promo Diskon 40%
        </p>
        <p className="text-xs font-medium text-brand-muted">
          Pakai kode LUMA40, hemat sampai 40%
        </p>
      </div>
      <ChevronRight size={18} className="text-brand-ink" />
    </div>
  );
}
