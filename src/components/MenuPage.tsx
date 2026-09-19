"use client";

import { useState } from "react";
import { Search, ChevronRight, Plus, CakeSlice, Donut, Pizza, IceCreamCone } from "lucide-react";
import CartPreview from "./CartPreview";
import CartModal from "./CartModal";

const products = [
  {
    id: 1,
    name: "Kue Coklat Lezat",
    desc: "Kue coklat lembut dengan topping ganache",
    price: 25000,
    rating: 4.8,
    category: "Kue & Donat",
    Icon: CakeSlice,
  },
  {
    id: 2,
    name: "Donat Strawberry",
    desc: "Donat empuk dengan glaze strawberry segar",
    price: 15000,
    rating: 4.9,
    category: "Kue & Donat",
    Icon: Donut,
  },
  {
    id: 3,
    name: "Pizza Premium",
    desc: "Saus tomat, keju mozzarella, topping premium",
    price: 85000,
    rating: 4.7,
    category: "Pizza",
    Icon: Pizza,
  },
  {
    id: 4,
    name: "Es Krim Vanilla",
    desc: "Es krim vanilla lembut, creamy dan manis",
    price: 12000,
    rating: 4.6,
    category: "Es Krim",
    Icon: IceCreamCone,
  },
];

const categories = ["Semua", "Kue & Donat", "Pizza", "Es Krim"];

type Product = typeof products[0] & { quantity?: number };

export default function MenuPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const getTotalPrice = (): number =>
    cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      handleRemoveItem(productId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const getLastProduct = () =>
    cartItems.length === 0 ? "" : cartItems[cartItems.length - 1].name;

  const filtered = products.filter(
    (p) =>
      (activeCategory === "Semua" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = categories
    .slice(1)
    .map((category) => ({
      category,
      items: filtered.filter((p) => p.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="min-h-screen" style={{ background: "#EDEBE4" }}>
      <div
        className="max-w-md mx-auto min-h-screen flex flex-col"
        style={{ background: "#FAFAF8" }}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-20 px-5 pt-5 pb-4 flex flex-col gap-1"
          style={{ background: "#4A3527" }}
        >
          <div className="flex items-center justify-between">
            <span
              className="font-sora text-[21px] font-bold tracking-tight"
              style={{ color: "#FAFAF8" }}
            >
              LUMA
            </span>
            <div
              className="w-[38px] h-[38px] rounded-full flex items-center justify-center font-sora font-bold text-sm flex-shrink-0"
              style={{ background: "#FAFAF8", color: "#4A3527" }}
            >
              L
            </div>
          </div>
          <p className="text-[13px] font-medium" style={{ color: "#C9B8A8" }}>
            Selamat datang, mau pesan apa hari ini?
          </p>

          <div
            className="mt-3.5 rounded-2xl px-4 py-3 flex items-center gap-2.5"
            style={{ background: "#5C4433" }}
          >
            <Search size={17} color="#D9C7B8" strokeWidth={2} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari kue, pizza, es krim..."
              className="bg-transparent outline-none text-sm flex-1 min-w-0"
              style={{ color: "#FAFAF8" }}
            />
          </div>
        </div>

        {/* Category chips */}
        <div className="flex gap-2 px-5 pt-4 pb-1 overflow-x-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 font-semibold text-[13px] px-[18px] py-2.5 rounded-full transition"
                style={
                  isActive
                    ? { background: "#D97757", color: "#FFFFFF" }
                    : {
                        background: "#FFFFFF",
                        color: "#55534D",
                        border: "1.5px solid #E5E3DD",
                      }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Promo banner */}
        <div
          className="mx-5 mt-3.5 rounded-2xl p-3.5 flex items-center justify-between"
          style={{ background: "#FFFFFF", border: "1.5px solid #E5E3DD" }}
        >
          <div className="flex flex-col gap-0.5">
            <p
              className="font-sora text-[14.5px] font-semibold"
              style={{ color: "#1C1C1A" }}
            >
              Promo Diskon 40%
            </p>
            <p className="text-xs font-medium" style={{ color: "#6F6C66" }}>
              Pakai kode LUMA40, hemat sampai 40%
            </p>
          </div>
          <ChevronRight size={18} color="#1C1C1A" />
        </div>

        {/* Menu list */}
        <div className="flex-1 px-5 pt-4 pb-28 flex flex-col gap-3">
          {grouped.length === 0 && (
            <p
              className="text-center text-sm mt-8"
              style={{ color: "#8B887F" }}
            >
              Produk tidak ditemukan
            </p>
          )}

          {grouped.map((group) => (
            <div key={group.category} className="flex flex-col gap-3">
              <p
                className="font-sora text-sm font-semibold mt-0.5"
                style={{ color: "#1C1C1A" }}
              >
                {group.category}
              </p>

              {group.items.map((item) => {
                const Icon = item.Icon;
                return (
                  <div
                    key={item.id}
                    className="rounded-[18px] p-3 flex gap-3 items-center"
                    style={{ background: "#FFFFFF", border: "1px solid #EEEDE7" }}
                  >
                    <div
                      className="w-[68px] h-[68px] rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: "#F5F1EA" }}
                    >
                      <Icon size={30} color="#D97757" strokeWidth={1.7} />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <p
                        className="font-bold text-sm truncate"
                        style={{ color: "#1C1C1A" }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="text-xs truncate"
                        style={{ color: "#8B887F" }}
                      >
                        {item.desc}
                      </p>
                      <p
                        className="font-sora text-sm font-semibold mt-0.5"
                        style={{ color: "#D97757" }}
                      >
                        Rp {item.price.toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={() => handleAddToCart(item)}
                      aria-label={`Tambah ${item.name} ke keranjang`}
                      className="w-[34px] h-[34px] rounded-full flex items-center justify-center flex-shrink-0 active:scale-90 transition"
                      style={{ background: "#D97757" }}
                    >
                      <Plus size={16} color="#FFFFFF" strokeWidth={2.4} />
                    </button>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

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
    </div>
  );
}
