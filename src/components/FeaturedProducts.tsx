"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import CartPreview from "./CartPreview";

const products = [
  { id: 1, name: "Kue Coklat Lezat", price: 25000, rating: 4.8 },
  { id: 2, name: "Donat Strawberry", price: 15000, rating: 4.9 },
  { id: 3, name: "Pizza Premium", price: 85000, rating: 4.7 },
  { id: 4, name: "Es Krim Vanilla", price: 12000, rating: 4.6 },
];

export default function FeaturedProducts() {
  const [cartItems, setCartItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [lastProduct, setLastProduct] = useState("");
  const [showCartPreview, setShowCartPreview] = useState(false);

  const handleAddToCart = (product: typeof products[0]) => {
    setCartItems(prev => prev + 1);
    setCartTotal(prev => prev + product.price);
    setLastProduct(product.name);
    setShowCartPreview(true);

    // Hide preview after 3 seconds
    setTimeout(() => setShowCartPreview(false), 3000);
  };

  return (
    <>
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Produk Unggulan Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition hover:border-[#EC6530] cursor-pointer"
            >
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
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-[#EC6530] text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <CartPreview
        isVisible={showCartPreview}
        itemCount={cartItems}
        totalPrice={cartTotal}
        lastProduct={lastProduct}
      />
    </>
  );
}
