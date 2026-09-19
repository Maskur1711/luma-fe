"use client";

import { Search } from "lucide-react";

interface MenuHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function MenuHeader({ search, onSearchChange }: MenuHeaderProps) {
  return (
    <div className="sticky top-0 z-20 bg-brand-brown px-5 pt-5 pb-4 flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="font-sora text-xl font-bold tracking-tight text-brand-bg">LUMA</span>
        <div className="w-[38px] h-[38px] rounded-full bg-brand-bg flex items-center justify-center font-sora font-bold text-sm text-brand-brown flex-shrink-0">
          L
        </div>
      </div>
      <p className="text-[13px] font-medium text-brand-tan">
        Selamat datang, mau pesan apa hari ini?
      </p>

      <div className="mt-3.5 rounded-2xl px-4 py-3 flex items-center gap-2.5 bg-brand-brown-light">
        <Search size={17} className="text-brand-tan-light" strokeWidth={2} />
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari kue, pizza, es krim..."
          className="bg-transparent outline-none text-sm flex-1 min-w-0 text-brand-bg placeholder:text-brand-tan-light"
        />
      </div>
    </div>
  );
}
