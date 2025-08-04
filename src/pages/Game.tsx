// import ScoreBoard from "../components/ScoreBoard";
// import Hand from "../components/Hand";
import GameBoard from "../components/GameBoard";

export default function Game() {
  return (
    <div className="p-2 space-y-6">
      <h1 className="text-2xl font-bold text-center">Dice Dice Baby</h1>

      {/* <ScoreBoard />
      <Hand /> */}

      <div className="flex justify-center">
        <GameBoard />
      </div>

    </div>
  );
}