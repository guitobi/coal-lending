import {
  Flame,
  Sparkles,
  Scale,
  Truck,
  Factory,
  DollarSign,
} from "lucide-react";

export const features = [
  {
    icon: (
      <Flame className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "High Heat",
    desc: "Maximum thermal efficiency",
  },
  {
    icon: (
      <Sparkles className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "Low Ash",
    desc: "Minimal residue",
  },
  {
    icon: (
      <Scale className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "Certified",
    desc: "Honest weight",
  },
  {
    icon: (
      <Truck className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "Fast Delivery",
    desc: "Quick shipping",
  },
  {
    icon: (
      <Factory className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "Eco-Friendly",
    desc: "Sustainable sourcing",
  },
  {
    icon: (
      <DollarSign className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "Best Value",
    desc: "Competitive pricing",
  },
];
