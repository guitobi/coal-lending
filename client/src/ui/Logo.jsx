function Logo() {
  return (
    <div className="relative px-2 py-2 h-full flex items-center justify-center grow flex-none">
      <img
        fetchPriority="high"
        width={1280}
        height={1074}
        src="/Logo-Photoroom.png"
        alt="Van Share Logo"
        className="relative z-10 h-14 sm:h-14 md:h-16 lg:h-20 w-auto transition-all duration-300 brightness-0 invert opacity-90 hover:opacity-100"
      />
    </div>
  );
}

export default Logo;
