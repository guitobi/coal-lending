import { Phone, Truck, Wallet } from "lucide-react";

export const steps = [
  {
    icon: (
      <Phone className="w-10 text-orange-500 h-10 md:text-stone-500 group-hover:text-orange-500" />
    ),
    title: "howItWorks.order.title",
    desc: "howItWorks.order.description",
  },
  {
    icon: (
      <Truck className="w-10 text-orange-500 h-10 md:text-stone-500 group-hover:text-orange-500" />
    ),
    title: "howItWorks.fastDelivery.title",
    desc: "howItWorks.fastDelivery.description",
  },
  {
    icon: (
      <Wallet className="w-10 h-10  text-orange-500 md:text-stone-500 group-hover:text-orange-500" />
    ),
    title: "howItWorks.payOnDelivery.title",
    desc: "howItWorks.payOnDelivery.description",
  },
];
