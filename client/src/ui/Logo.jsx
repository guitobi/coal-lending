function Logo() {
  return (
    <div className="relative px-10 py-2 h-full flex items-center justify-center bg-[#d4c4a8] grow flex-none ">
      <img
        src="/Logo-Photoroom.png"
        alt="Van Share Logo"
        className="relative z-10 h-14 sm:h-14 md:h-16 lg:h-20 w-auto brightness-150 contrast-125 saturate-125 transition-all duration-300 drop-shadow-[0_0_14px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_22px_rgba(255,255,255,0.9)] hover:brightness-150 hover:contrast-125 hover:saturate-125"
      />
    </div>
  );
}

export default Logo;
