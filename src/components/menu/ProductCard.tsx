"use client";

import { Plus } from "lucide-react";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  const Icon = product.Icon;

  return (
    <div className="rounded-[18px] p-3 flex gap-3 items-center bg-white border border-brand-border-light">
      <div className="w-[68px] h-[68px] rounded-xl flex-shrink-0 flex items-center justify-center bg-brand-surface">
        <Icon size={30} className="text-brand-accent" strokeWidth={1.7} />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
        <p className="font-bold text-sm truncate text-brand-ink">{product.name}</p>
        <p className="text-xs truncate text-brand-muted-light">{product.desc}</p>
        <p className="font-sora text-sm font-semibold mt-0.5 text-brand-accent">
          Rp {product.price.toLocaleString()}
        </p>
      </div>

      <button
        onClick={() => onAdd(product)}
        aria-label={`Tambah ${product.name} ke keranjang`}
        className="w-[34px] h-[34px] rounded-full flex items-center justify-center flex-shrink-0 active:scale-90 transition bg-brand-accent"
      >
        <Plus size={16} className="text-white" strokeWidth={2.4} />
      </button>
    </div>
  );
}
