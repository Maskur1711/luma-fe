"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import CartPreview from "./CartPreview";
import CartModal from "./CartModal";

const products = [
  { id: 1, name: "Kue Coklat Lezat", price: 25000, rating: 4.8 },
  { id: 2, name: "Donat Strawberry", price: 15000, rating: 4.9 },
  { id: 3, name: "Pizza Premium", price: 85000, rating: 4.7 },
  { id: 4, name: "Es Krim Vanilla", price: 12000, rating: 4.6 },
];

type Product = typeof products[0] & { quantity?: number };

export default function FeaturedProducts() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      ));
    } else {
      const newItem: Product = {
        ...product,
        quantity: 1
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const getTotalPrice = (): number => {
    const total = cartItems.reduce((sum, item) => {
      return sum + (item.price * (item.quantity || 1));
    }, 0);
    return total;
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      handleRemoveItem(productId);
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const getLastProduct = () => {
    if (cartItems.length === 0) return "";
    return cartItems[cartItems.length - 1].name;
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
        itemCount={cartItems.length}
        totalPrice={getTotalPrice()}
        lastProduct={getLastProduct()}
        onClick={() => setShowCartModal(true)}
      />

      <CartModal
        isOpen={showCartModal}
        cartItems={cartItems}
        onClose={() => setShowCartModal(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </>
  );
}
