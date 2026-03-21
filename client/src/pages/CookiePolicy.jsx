import Seo from "../seo/Seo";

function CookiePolicy() {
  return (
    <section className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title="Cookie Policy"
        description="Cookie usage policy for VAN SHARE website."
        path="/cookie-policy"
      />

      <div className="max-w-4xl mx-auto bg-stone-900/40 border border-stone-800 rounded-2xl p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-300 mb-6">
          Cookie Policy
        </h1>

        <div className="space-y-6 text-stone-300 leading-relaxed">
          <p>
            This website may use cookies and similar technologies to improve
            user experience and analyze website performance.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              Essential cookies
            </h2>
            <p>
              Required for core site functionality such as language settings and
              secure communication.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              Analytics cookies
            </h2>
            <p>
              May be used to understand traffic and improve content and
              performance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              Managing cookies
            </h2>
            <p>
              You can disable or delete cookies through your browser settings at
              any time.
            </p>
          </div>

          <p className="text-sm text-stone-400">Last updated: March 21, 2026</p>
        </div>
      </div>
    </section>
  );
}

export default CookiePolicy;
