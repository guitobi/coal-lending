function Button({ children, type }) {
  const base =
    "rounded-full font-semibold transition-all duration-300 border-2";

  const styles = {
    primary:
      base +
      " text-xl px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold shadow-lg hover:shadow-2xl hover:brightness-110 border-orange-600",
    secondary:
      base +
      " text-base px-5 py-2 bg-stone-200 text-stone-700 border-stone-300 hover:bg-stone-300 hover:border-stone-400",
    small:
      base +
      " text-sm px-4 py-1.5 bg-yellow-400 text-stone-800 border-yellow-500 hover:bg-yellow-500",
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
