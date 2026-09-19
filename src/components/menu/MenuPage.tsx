"use client";

import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import MenuHeader from "./MenuHeader";
import CategoryChips from "./CategoryChips";
import PromoBanner from "./PromoBanner";
import ProductCard from "./ProductCard";
import CartPreview from "@/components/cart/CartPreview";
import CartModal from "@/components/cart/CartModal";

export default function MenuPage() {
  const cart = useCart();
  const [showCartModal, setShowCartModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0]);
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter(
    (product) =>
      (activeCategory === "Semua" || product.category === activeCategory) &&
      product.name.toLowerCase().includes(search.toLowerCase())
  );

  const groupedByCategory = CATEGORIES.slice(1)
    .map((category) => ({
      category,
      items: filtered.filter((product) => product.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="min-h-screen bg-brand-backdrop">
      <div className="max-w-md mx-auto min-h-screen flex flex-col bg-brand-bg">
        <MenuHeader search={search} onSearchChange={setSearch} />
        <CategoryChips categories={CATEGORIES} active={activeCategory} onSelect={setActiveCategory} />
        <PromoBanner />

        <div className="flex-1 px-5 pt-4 pb-28 flex flex-col gap-3">
          {groupedByCategory.length === 0 && (
            <p className="text-center text-sm mt-8 text-brand-muted-light">
              Produk tidak ditemukan
            </p>
          )}

          {groupedByCategory.map((group) => (
            <div key={group.category} className="flex flex-col gap-3">
              <p className="font-sora text-sm font-semibold mt-0.5 text-brand-ink">
                {group.category}
              </p>
              {group.items.map((product) => (
                <ProductCard key={product.id} product={product} onAdd={cart.addItem} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <CartPreview
        itemCount={cart.items.length}
        totalPrice={cart.totalPrice}
        onClick={() => setShowCartModal(true)}
      />

      <CartModal
        isOpen={showCartModal}
        cartItems={cart.items}
        onClose={() => setShowCartModal(false)}
        onUpdateQuantity={cart.updateQuantity}
        onRemoveItem={cart.removeItem}
      />
    </div>
  );
}
