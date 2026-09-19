"use client";

import React from "react";
import { X, Minus, Plus, Trash2, UtensilsCrossed } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  quantity?: number;
}

interface CartModalProps {
  isOpen: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export default function CartModal({
  isOpen,
  cartItems,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}: CartModalProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  if (!isOpen) return null;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      router.push(`/payment?total=${totalPrice}&items=${cartItems.length}`);
    } catch (error) {
      console.error("Checkout error:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-4 md:p-6 z-50 max-w-2xl mx-auto w-full max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Rincian Keranjang ({cartItems.length} item)
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        <div className="space-y-3 mb-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-3"
            >
              <div className="flex gap-3">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UtensilsCrossed size={28} className="text-[#EC6530]" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-2">
                    Rp {item.price.toLocaleString()}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        onUpdateQuantity(
                          item.id,
                          Math.max(1, (item.quantity || 1) - 1)
                        )
                      }
                      className="p-1 hover:bg-white rounded transition"
                    >
                      <Minus size={16} className="text-gray-700" />
                    </button>
                    <span className="text-sm font-bold w-6 text-center text-black">
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, (item.quantity || 1) + 1)
                      }
                      className="p-1 hover:bg-white rounded transition"
                    >
                      <Plus size={16} className="text-gray-700" />
                    </button>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end justify-between">
                  <p className="font-bold text-[#EC6530]">
                    Rp {(item.price * (item.quantity || 1)).toLocaleString()}
                  </p>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 hover:bg-red-50 rounded transition"
                  >
                    <Trash2 size={18} className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-900">Total:</span>
            <span className="text-2xl font-bold text-[#EC6530]">
              Rp {totalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-white border border-gray-300 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            Lanjut Belanja
          </button>
          <button
            onClick={handleCheckout}
            disabled={isLoading}
            className="flex-1 bg-[#EC6530] text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isLoading ? "Processing..." : "Checkout"}
          </button>
        </div>
      </div>
    </>
  );
}
