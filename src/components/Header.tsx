import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#FFAE6E] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Luma
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="#" className="hover:text-[#EC6530] transition">
            Home
          </Link>
          <Link href="#" className="hover:text-[#EC6530] transition">
            Products
          </Link>
          <Link href="#" className="hover:text-[#EC6530] transition">
            About
          </Link>
          <Link href="#" className="hover:text-[#EC6530] transition">
            Contact
          </Link>
        </nav>

        <button className="p-2 hover:bg-white/20 rounded-lg transition">
          <ShoppingCart size={24} />
        </button>
      </div>
    </header>
  );
}
