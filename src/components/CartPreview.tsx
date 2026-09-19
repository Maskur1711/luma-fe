"use client";

import { ShoppingBag } from "lucide-react";

interface CartPreviewProps {
  itemCount: number;
  totalPrice: number;
  lastProduct: string;
  onClick: () => void;
}

export default function CartPreview({ itemCount, totalPrice, onClick }: CartPreviewProps) {
  if (itemCount === 0) return null;

  return (
    <div className="fixed left-0 right-0 bottom-0 z-30 flex justify-center px-5 pb-5 pt-3 pointer-events-none"
      style={{ background: "linear-gradient(180deg, rgba(250,250,248,0) 0%, #FAFAF8 35%)" }}
    >
      <button
        onClick={onClick}
        className="pointer-events-auto w-full max-w-md rounded-2xl px-[18px] py-3.5 flex items-center justify-between active:scale-[0.98] transition"
        style={{ background: "#D97757", boxShadow: "0 10px 24px rgba(217,119,87,0.35)" }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "#FFFFFF" }}
          >
            <span className="font-bold text-[12.5px]" style={{ color: "#D97757" }}>
              {itemCount}
            </span>
          </div>
          <span className="text-white font-bold text-sm flex items-center gap-2">
            <ShoppingBag size={16} />
            Lihat Keranjang
          </span>
        </div>

        <span className="font-sora text-white font-semibold text-[15px]">
          Rp {totalPrice.toLocaleString()}
        </span>
      </button>
    </div>
  );
}
