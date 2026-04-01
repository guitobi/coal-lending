import Seo from "../seo/Seo";
import GDPRConsentManager from "../features/GDPR/GDPRConsentManager";

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

          {/* GDPR Rights Section */}
          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              Your Rights under GDPR
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-stone-300">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure of your data</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              Contact Us About Your Data
            </h2>
            <p className="text-stone-300 mb-2">
              If you wish to exercise any of your GDPR rights or have questions
              about our data practices, please contact us at:
            </p>
            <p className="text-stone-300 font-medium">vanshare1@gmail.com</p>
          </div>

          <p className="text-sm text-stone-400">Last updated: March 21, 2026</p>
        </div>

        {/* GDPR Consent Manager */}
        <div className="mt-8">
          <GDPRConsentManager />
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
