function WaveDevider({ color = "amber-100", position = "top" }) {
  const colorClasses = {
    "amber-50": "fill-amber-50/70",
    "amber-100": "fill-amber-100/70",
    "amber-200": "fill-amber-200/70",
    "stone-100": "fill-stone-100/70",
    "stone-200": "fill-stone-200/70",
  };

  const isTop = position === "top";

  return (
    <div
      className={`absolute ${isTop ? "top-0 -translate-y-full" : "bottom-0 translate-y-full"} left-0 w-full overflow-hidden leading-0`}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-[calc(100%+1.3px)] h-12 md:h-20"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className={colorClasses[color]}
        ></path>
      </svg>
    </div>
  );
}

export default WaveDevider;
