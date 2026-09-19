import { MessageCircle, Heart, Share2, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Luma</h3>
          <p className="text-sm opacity-90">
            Makanan berkualitas, harga terjangkau, diantar cepat ke rumah Anda.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Menu</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#FFE3E3] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#FFE3E3] transition">Produk</a></li>
            <li><a href="#" className="hover:text-[#FFE3E3] transition">Kategori</a></li>
            <li><a href="#" className="hover:text-[#FFE3E3] transition">Promo</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Hubungi Kami</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>+62 812-3456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@lunafood.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Jakarta, Indonesia</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Follow Kami</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:bg-white/20 p-2 rounded-lg transition">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="hover:bg-white/20 p-2 rounded-lg transition">
              <Heart size={20} />
            </a>
            <a href="#" className="hover:bg-white/20 p-2 rounded-lg transition">
              <Share2 size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pt-8">
        <div className="text-center text-sm opacity-90">
          <p>&copy; 2024 Luma. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
