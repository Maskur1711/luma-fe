"use client";

import { ShoppingBag } from "lucide-react";

interface CartPreviewProps {
  isVisible: boolean;
  itemCount: number;
  totalPrice: number;
  lastProduct: string;
}

export default function CartPreview({ isVisible, itemCount, totalPrice, lastProduct }: CartPreviewProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-[#EC6530] text-white rounded-full px-6 py-4 shadow-lg flex items-center gap-4 max-w-sm">
        <div className="bg-white/20 rounded-full p-3">
          <ShoppingBag size={24} />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium">{itemCount} item</p>
          <p className="text-xs opacity-90 truncate">{lastProduct}</p>
        </div>

        <div className="text-right whitespace-nowrap">
          <p className="text-lg font-bold">
            Rp {totalPrice.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
