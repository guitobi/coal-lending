import CoalPiece from "./CoalPiece";

function BackgroundDecorations() {
  return (
    <div className="coal-decorations">
      {/* Coal pieces - показуємо різну кількість на різних екранах */}
      <CoalPiece className="coal-svg coal-1" />
      <CoalPiece className="coal-svg coal-2" />
      <CoalPiece className="coal-svg coal-3" />
      <CoalPiece className="coal-svg coal-4" />
      <CoalPiece className="coal-svg coal-5" />
      <CoalPiece className="coal-svg coal-6 hidden sm:block" />
      <CoalPiece className="coal-svg coal-7 hidden md:block" />
      <CoalPiece className="coal-svg coal-8 hidden md:block" />
      <CoalPiece className="coal-svg coal-9 hidden lg:block" />
      <CoalPiece className="coal-svg coal-10 hidden lg:block" />

      {/* Pickaxes */}
      <span className="coal-svg pickaxe-1">⛏️</span>
      <span className="coal-svg pickaxe-2">⛏️</span>
      <span className="coal-svg pickaxe-3 hidden sm:block">⛏️</span>
      <span className="coal-svg pickaxe-4 hidden md:block">⛏️</span>

      {/* Fire */}
      <span className="coal-svg fire-1">🔥</span>
      <span className="coal-svg fire-2">🔥</span>
      <span className="coal-svg fire-3 hidden sm:block">🔥</span>
      <span className="coal-svg fire-4 hidden md:block">🔥</span>
    </div>
  );
}

export default BackgroundDecorations;
