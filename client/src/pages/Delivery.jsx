import {
  Package,
  Truck,
  MapPin,
  CreditCard,
  Tag,
  FlaskConical,
  Handshake,
  Mail,
  Phone,
  MapPinned,
} from "lucide-react";
import DeliveryHero from "../features/Delivery/DeliveryHero";
import ProductPackages from "../features/Delivery/ProductPackages";
import DeliveryTerms from "../features/Delivery/DeliveryTerms";
import AditionalSevices from "../features/Delivery/AditionalSevices";
import DeliveryContactSection from "../features/Delivery/DeliveryContactSection";

function Delivery() {
  return (
    <div className="bg-[#d4c4a8] min-h-screen">
      {/* Hero Section */}
      <DeliveryHero />

      {/* Product Packages */}
      <ProductPackages />

      {/* Delivery Terms - Zig-Zag */}
      <DeliveryTerms />

      {/* Additional Services */}
      <AditionalSevices />
      {/* Contact Section */}
      <DeliveryContactSection />
    </div>
  );
}

export default Delivery;
