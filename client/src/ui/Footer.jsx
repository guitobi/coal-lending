import { Link } from "react-router";
import FooterCompanyInfo from "./FooterCompanyInfo";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterContactInfo from "./FooterContactInfo";
import FooterCopyrigth from "./FooterCopyrigth";

function Footer() {
  return (
    <footer className="bg-neutral-900 text-slate-50 border-t-4 border-yellow-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          <FooterCompanyInfo />

          <FooterQuickLinks />

          <FooterContactInfo />
        </div>

        <FooterCopyrigth />
      </div>
    </footer>
  );
}

export default Footer;
