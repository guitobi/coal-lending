import { Phone, Truck, Wallet } from "lucide-react";

export const steps = [
  {
    icon: (
      <Phone className="w-10 text-orange-500 h-10 md:text-stone-500 group-hover:text-orange-500" />
    ),
    title: "howItWorks.order.1. Order",
    desc: "howItWorks.order.Leave a request on the website or call us. Our manager will clarify delivery details within 2 minutes.",
  },
  {
    icon: (
      <Truck className="w-10 text-orange-500 h-10 md:text-stone-500 group-hover:text-orange-500" />
    ),
    title: "howItWorks.fastDelivery.2. Fast Delivery",
    desc: "howItWorks.fastDelivery.We load and deliver charcoal with our own transport within 1-3 days.",
  },
  {
    icon: (
      <Wallet className="w-10 h-10  text-orange-500 md:text-stone-500 group-hover:text-orange-500" />
    ),
    title: "howItWorks.payOnDelivery.3. Pay on Delivery",
    desc: "howItWorks.payOnDelivery.No risks. You check the weight and quality at home, and only then pay.",
  },
];
