import { Link } from "react-router";

function Button({ children, type, to }) {
  const base =
    "rounded-full font-semibold transition-all duration-300 border-2";

  const styles = {
    primary:
      base +
      " text-base sm:text-lg md:text-xl px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold shadow-lg hover:shadow-2xl hover:brightness-110 border-yellow-600",
    secondary:
      base +
      " text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 bg-neutral-800 text-slate-100 border-neutral-700 hover:bg-neutral-700 hover:border-neutral-600",
    small:
      base +
      " text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-1.5 bg-yellow-400 text-neutral-800 border-yellow-500 hover:bg-yellow-500",
  };

  if (to) {
    return (
      <Link to="/calculator" className={styles[type]}>
        {children}
      </Link>
    );
  }

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
