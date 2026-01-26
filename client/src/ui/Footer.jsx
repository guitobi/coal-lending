import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-stone-800 text-slate-50 border-t-4 border-orange-500">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-4">
              Van Share
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Quality coal for your comfort and warmth. Fast delivery across
              Poland.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-orange-400">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-orange-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-orange-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/delivery"
                  className="text-slate-300 hover:text-orange-300 transition-colors"
                >
                  Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-orange-400">
              Contact
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>📞 +380 (XX) XXX-XX-XX</li>
              <li>📧 info@coal-lending.ua</li>
              <li>📍 Kyiv, Prykladna St., 1</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-700 mt-8 pt-6 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Coal Lending. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
