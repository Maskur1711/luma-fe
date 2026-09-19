import type { LucideIcon } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
  Icon: LucideIcon;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
