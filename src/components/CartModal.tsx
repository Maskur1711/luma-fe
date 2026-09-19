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
      const cartData = cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
      }));
      const cartParam = encodeURIComponent(JSON.stringify(cartData));
      router.push(`/payment?total=${totalPrice}&items=${cartItems.length}&cart=${cartParam}`);
    } catch (error) {
      console.error("Checkout error:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />

      <div
        className="fixed bottom-0 left-0 right-0 rounded-t-3xl p-4 md:p-6 z-50 max-w-md mx-auto w-full max-h-[85vh] overflow-y-auto"
        style={{ background: "#FAFAF8" }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-sora text-lg font-semibold" style={{ color: "#1C1C1A" }}>
            Rincian Keranjang ({cartItems.length} item)
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full transition hover:bg-black/5"
          >
            <X size={24} color="#55534D" />
          </button>
        </div>

        <div className="space-y-3 mb-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-3"
              style={{ background: "#FFFFFF", border: "1px solid #EEEDE7" }}
            >
              <div className="flex gap-3">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#F5F1EA" }}
                >
                  <UtensilsCrossed size={28} color="#D97757" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4
                    className="font-semibold mb-1 text-sm md:text-base"
                    style={{ color: "#1C1C1A" }}
                  >
                    {item.name}
                  </h4>
                  <p className="text-xs md:text-sm mb-2" style={{ color: "#8B887F" }}>
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
                      className="p-1 rounded transition hover:bg-black/5"
                    >
                      <Minus size={16} color="#55534D" />
                    </button>
                    <span
                      className="text-sm font-bold w-6 text-center"
                      style={{ color: "#1C1C1A" }}
                    >
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, (item.quantity || 1) + 1)
                      }
                      className="p-1 rounded transition hover:bg-black/5"
                    >
                      <Plus size={16} color="#55534D" />
                    </button>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end justify-between">
                  <p className="font-sora font-bold" style={{ color: "#D97757" }}>
                    Rp {(item.price * (item.quantity || 1)).toLocaleString()}
                  </p>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 rounded transition hover:bg-red-50"
                  >
                    <Trash2 size={18} className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-4 mb-6"
          style={{ background: "#FFFFFF", border: "1px solid #EEEDE7" }}
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold" style={{ color: "#1C1C1A" }}>
              Total:
            </span>
            <span className="font-sora text-2xl font-bold" style={{ color: "#D97757" }}>
              Rp {totalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl font-semibold transition"
            style={{ background: "#FFFFFF", border: "1.5px solid #E5E3DD", color: "#1C1C1A" }}
          >
            Lanjut Belanja
          </button>
          <button
            onClick={handleCheckout}
            disabled={isLoading}
            className="flex-1 text-white py-3 rounded-xl font-semibold transition disabled:opacity-75 disabled:cursor-not-allowed"
            style={{ background: "#D97757" }}
          >
            {isLoading ? "Processing..." : "Checkout"}
          </button>
        </div>
      </div>
    </>
  );
}
