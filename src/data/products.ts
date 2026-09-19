import { CakeSlice, Donut, Pizza, IceCreamCone } from "lucide-react";
import type { Product } from "@/types";

export const CATEGORIES = ["Semua", "Kue & Donat", "Pizza", "Es Krim"] as const;

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Kue Coklat Lezat",
    desc: "Kue coklat lembut dengan topping ganache",
    price: 25000,
    category: "Kue & Donat",
    Icon: CakeSlice,
  },
  {
    id: 2,
    name: "Donat Strawberry",
    desc: "Donat empuk dengan glaze strawberry segar",
    price: 15000,
    category: "Kue & Donat",
    Icon: Donut,
  },
  {
    id: 3,
    name: "Pizza Premium",
    desc: "Saus tomat, keju mozzarella, topping premium",
    price: 85000,
    category: "Pizza",
    Icon: Pizza,
  },
  {
    id: 4,
    name: "Es Krim Vanilla",
    desc: "Es krim vanilla lembut, creamy dan manis",
    price: 12000,
    category: "Es Krim",
    Icon: IceCreamCone,
  },
];
