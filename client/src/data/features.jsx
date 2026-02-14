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
    title: "keyFeatures.High Heat",
    desc: "keyFeatures.Maximum thermal efficiency",
  },
  {
    icon: (
      <Sparkles className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "keyFeatures.Low Ash",
    desc: "keyFeatures.Minimal residue",
  },
  {
    icon: (
      <Scale className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "keyFeatures.Certified",
    desc: "keyFeatures.Honest weight",
  },
  {
    icon: (
      <Truck className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "keyFeatures.Fast Delivery",
    desc: "keyFeatures.Quick shipping",
  },
  {
    icon: (
      <Factory className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "keyFeatures.Eco-Friendly",
    desc: "keyFeatures.Sustainable sourcing",
  },
  {
    icon: (
      <DollarSign className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "keyFeatures.Best Value",
    desc: "keyFeatures.Competitive pricing",
  },
];
