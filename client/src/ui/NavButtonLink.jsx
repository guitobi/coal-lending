import { Link } from "react-router";

function NavButtonLink({ type, children, to, onClick }) {
  const styles = {
    primary:
      " px-3 py-2 lg:px-5 lg:py-3 rounded-lg transition-all hover:bg-neutral-700 hover:text-yellow-300",
    logo: " flex h-full items-center gap-2 sm:gap-3 hover:scale-105 transition-all duration-300 group",
    mobile:
      " block py-3 px-4 transition-all hover:bg-neutral-700 hover:text-yellow-300",
  };
  return (
    <Link to={to} className={styles[type]} onClick={onClick}>
      {children}
    </Link>
  );
}

export default NavButtonLink;
