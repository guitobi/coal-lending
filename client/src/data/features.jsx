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
    title: "keyFeatures.highHeat",
    desc: "keyFeatures.maximumThermalEfficiency",
  },
  {
    icon: (
      <Sparkles className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "keyFeatures.lowAsh",
    desc: "keyFeatures.minimalResidue",
  },
  {
    icon: (
      <Scale className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "keyFeatures.certified",
    desc: "keyFeatures.honestWeight",
  },
  {
    icon: (
      <Truck className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "keyFeatures.fastDelivery",
    desc: "keyFeatures.quickShipping",
  },
  {
    icon: (
      <Factory className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "keyFeatures.ecoFriendly",
    desc: "keyFeatures.sustainableSourcing",
  },
  {
    icon: (
      <DollarSign className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
    ),
    title: "keyFeatures.bestValue",
    desc: "keyFeatures.competitivePricing",
  },
];
