import Seo from "../seo/Seo";

function PrivacyPolicy() {
  return (
    <section className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title="Privacy Policy"
        description="Privacy policy for VAN SHARE website and customer communications."
        path="/privacy-policy"
      />

      <div className="max-w-4xl mx-auto bg-stone-900/40 border border-stone-800 rounded-2xl p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-300 mb-6">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-stone-300 leading-relaxed">
          <p>
            We process personal data only for order processing, customer
            support, and service communication.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              What data we collect
            </h2>
            <p>
              Name, email address, phone number, city, and order-related details
              submitted through forms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              Why we collect data
            </h2>
            <p>
              To fulfill orders, respond to contact requests, and provide
              delivery information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              Data sharing
            </h2>
            <p>
              We do not sell personal data. Data can be shared only with
              logistics or service providers when required for order
              fulfillment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              Your rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              data by contacting us at vanshare1@gmail.com.
            </p>
          </div>

          <p className="text-sm text-stone-400">Last updated: March 21, 2026</p>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
