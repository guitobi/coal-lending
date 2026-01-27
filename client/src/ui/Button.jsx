function Button({ children, type }) {
  const base =
    "rounded-full font-semibold transition-all duration-300 border-2";

  const styles = {
    primary:
      base +
      " text-lg sm:text-xl md:text-2xl lg:text-3xl px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-5 lg:px-12 lg:py-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold shadow-lg hover:shadow-2xl hover:brightness-110 border-orange-600",
    secondary:
      base +
      " text-sm sm:text-base md:text-lg lg:text-xl px-4 py-1.5 sm:px-5 sm:py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 bg-stone-200 text-stone-700 border-stone-300 hover:bg-stone-300 hover:border-stone-400",
    small:
      base +
      " text-xs sm:text-sm md:text-base px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 bg-yellow-400 text-stone-800 border-yellow-500 hover:bg-yellow-500",
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
