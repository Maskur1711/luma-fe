"use client";

import Link from "next/link";
import { ShoppingCart, Plus } from "lucide-react";
import { useState } from "react";
import SearchModal from "./SearchModal";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
          Luma
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="#" className="text-gray-700 hover:text-[#EC6530] transition">
            Home
          </Link>
          <Link href="#" className="text-gray-700 hover:text-[#EC6530] transition">
            Products
          </Link>
          <Link href="#" className="text-gray-700 hover:text-[#EC6530] transition">
            About
          </Link>
          <Link href="#" className="text-gray-700 hover:text-[#EC6530] transition">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-gray-700 hover:text-[#EC6530] transition"
          >
            <Plus size={24} />
          </button>
          <button className="p-2 text-gray-700 hover:text-[#EC6530] transition">
            <ShoppingCart size={24} />
          </button>
        </div>
      </div>
    </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
