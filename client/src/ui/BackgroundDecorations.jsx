import CoalPiece from "./CoalPiece";

function BackgroundDecorations() {
  return (
    <div className="coal-decorations">
      {/* Coal pieces */}
      <CoalPiece className="coal-svg coal-1" />
      <CoalPiece className="coal-svg coal-2" />
      <CoalPiece className="coal-svg coal-3" />
      <CoalPiece className="coal-svg coal-4" />
      <CoalPiece className="coal-svg coal-5" />
      <CoalPiece className="coal-svg coal-6" />
      <CoalPiece className="coal-svg coal-7" />
      <CoalPiece className="coal-svg coal-8" />
      <CoalPiece className="coal-svg coal-9" />
      <CoalPiece className="coal-svg coal-10" />

      {/* Pickaxes */}
      <span className="coal-svg pickaxe-1">⛏️</span>
      <span className="coal-svg pickaxe-2">⛏️</span>
      <span className="coal-svg pickaxe-3">⛏️</span>
      <span className="coal-svg pickaxe-4">⛏️</span>

      {/* Fire */}
      <span className="coal-svg fire-1">🔥</span>
      <span className="coal-svg fire-2">🔥</span>
      <span className="coal-svg fire-3">🔥</span>
      <span className="coal-svg fire-4">🔥</span>
    </div>
  );
}

export default BackgroundDecorations;
