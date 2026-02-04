import { Link } from "react-router";

function FooterQuickLinks() {
  return (
    <div>
      <h4 className="text-xl sm:text-xl lg:text-2xl font-semibold mb-4 text-orange-400">
        Navigation
      </h4>
      <ul className="space-y-2 text-sm sm:text-base lg:text-lg">
        <li>
          <Link
            to="/"
            className="text-slate-300 hover:text-orange-500 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-slate-300 hover:text-orange-500  transition-colors"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/delivery"
            className="text-slate-300 hover:text-orange-500 transition-colors"
          >
            Delivery
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterQuickLinks;
