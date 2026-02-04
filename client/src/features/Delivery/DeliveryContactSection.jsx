import { Mail, MapPinned, Phone } from "lucide-react";

function DeliveryContactSection() {
  return (
    <section className="bg-stone-900/50 py-16 border border-stone-800">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-6 text-orange-500">
          Ready to Order?
        </h2>
        <p className="text-xl mb-8 text-stone-400">
          Contact our sales department for orders and details
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-left max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 font-semibold mb-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <h3>Email</h3>
              </div>
              <a href="mailto:vanshare1@gmail.com" className="hover:underline">
                vanshare1@gmail.com
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 font-semibold mb-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <h3>Phone</h3>
              </div>
              <p>+48 577 432 949</p>
              <p>+48 730 670 345</p>
            </div>
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-semibold mb-2">
                <MapPinned className="w-5 h-5 text-orange-500" />
                <h3>Address</h3>
              </div>
              <p>Van Share Spółka z o.o.</p>
              <p>ul. Batalionów Chłopskich 3</p>
              <p>58-050 Jelenia Góra, Poland</p>
              <p className="mt-2 text-sm">NIP: 716-28-26886</p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm">Offer valid for 14 days from issue date</p>
      </div>
    </section>
  );
}

export default DeliveryContactSection;
