"use client";

import { X, Minus, Plus } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
}

interface AddToCartModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
}

export default function AddToCartModal({ isOpen, product, onClose }: AddToCartModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const totalPrice = product.price * quantity;

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 z-50 max-w-2xl mx-auto w-full animate-in slide-in-from-bottom duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Tambah ke Keranjang</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="flex gap-6">
            <div className="w-24 h-24 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-4xl">🍽️</span>
            </div>

            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h4>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? "text-[#EC6530]" : "text-gray-300"}>
                    ★
                  </span>
                ))}
                <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
              </div>
              <div className="text-2xl font-bold text-[#EC6530]">
                Rp {product.price.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-gray-600 mb-3">Jumlah</p>
          <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-3 w-fit">
            <button
              onClick={handleDecrement}
              className="p-2 hover:bg-white rounded-lg transition"
            >
              <Minus size={20} className="text-gray-700" />
            </button>
            <span className="text-xl font-bold text-gray-900 w-8 text-center">
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="p-2 hover:bg-white rounded-lg transition"
            >
              <Plus size={20} className="text-gray-700" />
            </button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Total Harga:</span>
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
            onClick={onClose}
            className="flex-1 bg-[#EC6530] text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Lihat Keranjang
          </button>
        </div>
      </div>
    </>
  );
}
