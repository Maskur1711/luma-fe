import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
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

        <button className="p-2 text-gray-700 hover:text-[#EC6530] transition">
          <ShoppingCart size={24} />
        </button>
      </div>
    </header>
  );
}
