function Logo() {
  return (
    <div className="relative flex items-center h-full">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-[#bfa76a] shadow-lg">
        <div className="absolute inset-0 bg-white/40 blur-[2px] pointer-events-none w-full h-full"></div>
      </div>
      <img
        src="/Logo-Photoroom.png"
        alt="Van Share Logo"
        className="relative z-10 h-10 xs:h-12 sm:h-14 md:h-16 lg:h-20 w-auto brightness-150 contrast-125 saturate-125 transition-all duration-300 drop-shadow-[0_0_14px_rgba(255,255,255,0.7)] drop-shadow-[0_0_8px_rgba(255,140,0,0.4)] hover:drop-shadow-[0_0_22px_rgba(255,255,255,0.9)] hover:drop-shadow-[0_0_16px_rgba(255,140,0,0.7)] hover:brightness-150 hover:contrast-125 hover:saturate-125"
      />
    </div>
  );
}

export default Logo;
