import { CheckCircle, Package, TreeDeciduous } from "lucide-react";

function DeliveryHero() {
  return (
    <section className="bg-stone-950/50 border border-black text-stone-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-stone-100">
          Premium Charcoal Delivery
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto px-4 text-stone-300">
          Official distributor of WOODEN WEST brand in Poland. High-quality
          hardwood charcoal for grilling and BBQ, compliant with European
          standard EN 1860-2:2005.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-stone-900/40rounded-lg px-6 py-3 flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-orange-500" strokeWidth={2} />
            </div>
            <span className="font-semibold text-stone-300 ">
              10-21 Days Delivery
            </span>
          </div>
          <div className="bg-stone-900/40 rounded-lg px-6 py-3 flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
              <CheckCircle
                className="w-6 h-6 text-orange-500"
                strokeWidth={2}
              />
            </div>
            <span className="font-semibold text-stone-300">
              EN 1860-2:2005 Certified
            </span>
          </div>
          <div className="bg-stone-900/40 rounded-lg px-6 py-3 flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
              <TreeDeciduous
                className="w-6 h-6 text-orange-500"
                strokeWidth={2}
              />
            </div>
            <span className="font-semibold text-stone-300">100% Hardwood</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliveryHero;
