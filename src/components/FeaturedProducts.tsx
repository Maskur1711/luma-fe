import { Star } from "lucide-react";

const products = [
  { id: 1, name: "Kue Coklat Lezat", price: 25000, emoji: "🍰", rating: 4.8 },
  { id: 2, name: "Donat Strawberry", price: 15000, emoji: "🍩", rating: 4.9 },
  { id: 3, name: "Pizza Premium", price: 85000, emoji: "🍕", rating: 4.7 },
  { id: 4, name: "Es Krim Vanilla", price: 12000, emoji: "🍦", rating: 4.6 },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#EC6530] text-center mb-12">
          ⭐ Produk Unggulan Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border-2 border-[#FFAE6E] rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
            >
              <div className="text-6xl text-center mb-4">{product.emoji}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? "fill-[#EC6530] text-[#EC6530]" : "text-gray-300"}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#EC6530]">
                  Rp {product.price.toLocaleString()}
                </span>
                <button className="bg-[#8FDDDF] text-[#EC6530] px-4 py-2 rounded-full font-semibold hover:bg-[#FFE3E3] transition">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
