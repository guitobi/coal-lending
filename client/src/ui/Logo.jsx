function Logo() {
  return (
    <div className="relative px-2 py-2 h-full flex items-center justify-center grow flex-none lg:ml-10 ">
      <picture>
        <source srcSet="/Logo-Photoroom.webp" type="image/webp" />
        <img
          width={1280}
          height={1074}
          src="/Logo-Photoroom.png"
          alt="Van Share Logo"
          decoding="async"
          className="relative z-10 h-14 sm:h-14 md:h-16 lg:h-20 w-auto transition-all duration-300 brightness-0 invert opacity-90 hover:opacity-100 aspect-1280/1074"
        />
      </picture>
    </div>
  );
}

export default Logo;
