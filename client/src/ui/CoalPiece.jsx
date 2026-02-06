function CoalPiece({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Minecraft-style coal - stepped angular shape */}
      <path
        d="M 35,10 L 45,8 L 55,10 L 62,12 L 68,18 L 75,25 L 82,35 L 88,45 L 90,55 L 88,65 L 82,75 L 75,82 L 65,88 L 55,92 L 45,90 L 35,88 L 25,82 L 18,75 L 12,65 L 10,55 L 12,45 L 18,35 L 25,25 L 30,18 Z"
        fill="#1a1a1a"
      />

      {/* Dark areas - angular patches */}
      <path d="M 25,30 L 35,28 L 40,35 L 35,42 L 28,40 Z" fill="#0d0d0d" />
      <path d="M 60,40 L 70,38 L 75,48 L 70,55 L 62,50 Z" fill="#0d0d0d" />
      <path d="M 40,65 L 50,63 L 55,72 L 48,78 L 38,72 Z" fill="#0d0d0d" />

      {/* Light highlights - angular */}
      <path d="M 40,18 L 50,15 L 55,22 L 48,28 L 42,25 Z" fill="#404040" />
      <path d="M 70,58 L 78,62 L 75,70 L 68,68 Z" fill="#333333" />

      {/* Medium tone patches */}
      <path d="M 28,55 L 35,53 L 40,60 L 35,68 L 30,62 Z" fill="#2d2d2d" />
      <path d="M 50,45 L 60,43 L 65,52 L 58,58 L 52,52 Z" fill="#252525" />

      {/* Small bright spot */}
      <polygon
        points="45,25 50,23 52,28 48,32 43,30"
        fill="#505050"
        opacity="0.7"
      />
    </svg>
  );
}

export default CoalPiece;
