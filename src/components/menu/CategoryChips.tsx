"use client";

interface CategoryChipsProps {
  categories: readonly string[];
  active: string;
  onSelect: (category: string) => void;
}

export default function CategoryChips({ categories, active, onSelect }: CategoryChipsProps) {
  return (
    <div className="flex gap-2 px-5 pt-4 pb-1 overflow-x-auto">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`flex-shrink-0 font-semibold text-[13px] px-[18px] py-2.5 rounded-full transition ${
              isActive
                ? "bg-brand-accent text-white"
                : "bg-white text-brand-chip border-[1.5px] border-brand-border"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
