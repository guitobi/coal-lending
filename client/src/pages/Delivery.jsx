import DeliveryHero from "../features/Delivery/DeliveryHero";

import DeliveryTerms from "../features/Delivery/DeliveryTerms";
import AditionalSevices from "../features/Delivery/AditionalSevices";
import DeliveryContactSection from "../features/Delivery/DeliveryContactSection";

function Delivery() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <DeliveryHero />

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
