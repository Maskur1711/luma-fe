"use client";

import { ShoppingBag } from "lucide-react";

interface CartPreviewProps {
  itemCount: number;
  totalPrice: number;
  lastProduct: string;
  onClick: () => void;
}

export default function CartPreview({ itemCount, totalPrice, lastProduct, onClick }: CartPreviewProps) {
  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-bottom duration-300 w-[calc(100%-2rem)] md:w-auto">
      <button
        onClick={onClick}
        className="bg-[#EC6530] text-white rounded-full px-4 md:px-6 py-3 md:py-4 shadow-lg flex items-center gap-3 md:gap-4 w-full md:max-w-sm hover:bg-orange-600 transition active:scale-95"
      >
        <div className="bg-white/20 rounded-full p-2 md:p-3 flex-shrink-0">
          <ShoppingBag size={20} className="md:w-6 md:h-6" />
        </div>

        <div className="flex-1 min-w-0 text-left">
          <p className="text-xs md:text-sm font-medium">{itemCount} item</p>
          <p className="text-xs opacity-90 truncate">{lastProduct}</p>
        </div>

        <div className="text-right whitespace-nowrap flex-shrink-0">
          <p className="text-sm md:text-lg font-bold">
            Rp {totalPrice.toLocaleString()}
          </p>
        </div>
      </button>
    </div>
  );
}
