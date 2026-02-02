function Pickaxe({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wooden handle - long diagonal stick */}
      <rect
        x="48"
        y="30"
        width="7"
        height="60"
        rx="2"
        fill="#8B4513"
        transform="rotate(40 50 60)"
      />
      {/* Wood grain texture */}
      <rect
        x="50"
        y="30"
        width="2"
        height="60"
        fill="#6B3510"
        transform="rotate(40 50 60)"
      />

      {/* Pickaxe curved metal head */}
      <path
        d="M12 35 C20 15, 40 12, 48 25 L44 30 C38 22, 25 24, 20 38 Z"
        fill="#4a4a4a"
      />
      {/* Metal shine */}
      <path
        d="M15 33 C22 18, 38 15, 45 26 L43 28 C37 20, 26 22, 20 35 Z"
        fill="#666"
      />

      {/* Metal head mount/collar */}
      <ellipse
        cx="46"
        cy="32"
        rx="6"
        ry="8"
        fill="#3a3a3a"
        transform="rotate(40 46 32)"
      />
    </svg>
  );
}

export default Pickaxe;
