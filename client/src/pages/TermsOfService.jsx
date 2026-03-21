import Seo from "../seo/Seo";

function TermsOfService() {
  return (
    <section className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title="Terms of Service"
        description="Terms of service for orders, delivery, and website usage at VAN SHARE."
        path="/terms-of-service"
      />

      <div className="max-w-4xl mx-auto bg-stone-900/40 border border-stone-800 rounded-2xl p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-300 mb-6">
          Terms of Service
        </h1>

        <div className="space-y-6 text-stone-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">Scope</h2>
            <p>
              These terms govern the use of this website and requests/orders
              made through it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              Orders and pricing
            </h2>
            <p>
              Product availability, pricing, and delivery conditions may change.
              Final terms are confirmed during order processing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              Delivery
            </h2>
            <p>
              Delivery timelines depend on logistics and destination. We provide
              estimated delivery windows and status updates.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              Liability
            </h2>
            <p>
              We are not liable for delays or issues caused by force majeure,
              incorrect customer-provided data, or third-party service failures.
            </p>
          </div>

          <p className="text-sm text-stone-400">Last updated: March 21, 2026</p>
        </div>
      </div>
    </section>
  );
}

export default TermsOfService;
