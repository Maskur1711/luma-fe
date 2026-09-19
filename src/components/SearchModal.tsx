"use client";

import { X, Search } from "lucide-react";
import { useState } from "react";

const quickCategories = [
  { name: "Snacks", icon: "🍪" },
  { name: "Bakery", icon: "🥐" },
  { name: "Beverages", icon: "🧃" },
  { name: "Desserts", icon: "🍰" },
  { name: "Fast Food", icon: "🍔" },
  { name: "Healthy", icon: "🥗" },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 z-50 max-w-2xl mx-auto w-full animate-in slide-in-from-bottom duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Cari Makanan</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Lagi mau makan apa?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC6530] focus:border-transparent"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-gray-600 mb-4">Pilihan Cepat</p>
          <div className="grid grid-cols-3 gap-3">
            {quickCategories.map((category, idx) => (
              <button
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:border-[#EC6530] hover:bg-white transition"
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <p className="text-sm font-medium text-gray-800">{category.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
