import { CreditCard, MapPin, Package, Truck } from "lucide-react";

function DeliveryTerms() {
  return (
    <section className="bg-stone-800/5 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-yellow-700">
              Delivery Terms
            </h2>
            <div className="space-y-4 text-stone-800">
              <div className="flex items-start">
                <Truck className="w-7 h-7 mr-3 text-yellow-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Fast Delivery</h3>
                  <p>10-21 business days from order confirmation</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-7 h-7 mr-3 text-yellow-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">DAP Polkowice</h3>
                  <p>Delivered to your specified location in Polkowice</p>
                </div>
              </div>
              <div className="flex items-start">
                <Package className="w-7 h-7 mr-3 text-yellow-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Minimum Order</h3>
                  <p>10 tons (negotiable for larger orders)</p>
                </div>
              </div>
              <div className="flex items-start">
                <CreditCard className="w-7 h-7 mr-3 text-yellow-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Payment Terms</h3>
                  <p>30% advance, 70% after delivery (bank transfer)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop"
              alt="Delivery truck"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliveryTerms;
