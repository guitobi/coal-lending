import { Link } from "react-router";

function Button({
  children,
  type,
  to,
  buttonType = "submit",
  onClick,
  className,
}) {
  const base =
    "rounded-full font-semibold transition-all duration-300 border-2 cursor-pointer";

  const styles = {
    primary:
      base +
      " text-base sm:text-lg md:text-xl px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4 text-orange-500 text-white font-bold shadow-md hover:shadow-lg hover:brightness-110 bg-orange-500 border-yellow-600 hover:bg-orange-600 shadow-orange-400",
    secondary:
      base +
      " text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2  bg-neutral-900/50 border border-stone-600 text-stone-400 hover:bg-orange-500/20 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300",
    small:
      base +
      " text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-1.5 bg-yellow-400 text-neutral-800 border-yellow-500 hover:bg-yellow-500",
    location:
      base +
      " text-sm px-4 py-2 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold shadow-lg hover:shadow-2xl hover:brightness-110 border-yellow-600",
  };

  if (to) {
    return (
      <Link to={to} className={className || styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={buttonType}
      className={className || styles[type]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
