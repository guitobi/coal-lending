function CoalPiece({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main coal shape - irregular rock */}
      <path
        d="M20 35 L35 15 L55 10 L75 18 L88 35 L92 55 L85 75 L70 90 L45 92 L25 85 L12 65 L15 45 Z"
        fill="#1a1a1a"
      />
      {/* Shiny facets */}
      <path d="M35 15 L55 10 L60 30 L40 35 Z" fill="#2d2d2d" />
      <path d="M75 18 L88 35 L75 45 L65 30 Z" fill="#333" />
      <path d="M25 85 L45 92 L50 75 L30 70 Z" fill="#252525" />
      {/* Subtle highlight for gloss effect */}
      <path d="M40 20 L52 18 L48 28 L38 30 Z" fill="#444" opacity="0.6" />
      {/* Surface cracks/texture lines */}
      <path
        d="M30 45 L50 50 L70 42"
        stroke="#0a0a0a"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M45 60 L60 65 L75 58"
        stroke="#0a0a0a"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M25 55 L35 70 L50 75"
        stroke="#0a0a0a"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

export default CoalPiece;
