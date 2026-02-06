import { Phone, Truck, Wallet } from "lucide-react";

export const steps = [
  {
    icon: (
      <Phone className="w-10 text-orange-500 h-10 md:text-stone-500 group-hover:text-orange-500" />
    ),
    title: "1. Order",
    desc: "Leave a request on the website or call us. Our manager will clarify delivery details within 2 minutes.",
  },
  {
    icon: (
      <Truck className="w-10 text-orange-500 h-10 md:text-stone-500 group-hover:text-orange-500" />
    ),
    title: "2. Fast Delivery",
    desc: "We load and deliver coal with our own transport within 1-3 days.",
  },
  {
    icon: (
      <Wallet className="w-10 h-10  text-orange-500 md:text-stone-500 group-hover:text-orange-500" />
    ),
    title: "3. Pay on Delivery",
    desc: "No risks. You check the weight and quality at home, and only then pay.",
  },
];
