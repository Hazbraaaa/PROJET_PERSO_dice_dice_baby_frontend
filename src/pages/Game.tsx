// import ScoreBoard from "../components/ScoreBoard";
import Hand from "../components/Hand";
import GameBoard from "../components/GameBoard";
import { Button } from "../components/Button";

export default function Game() {
  return (
    <div className="p-2 space-y-6">
      <h1 className="text-2xl font-bold text-center">Dice Dice Baby</h1>

      {/* <div className="flex flex-col justify-center">
        <ScoreBoard />
      </div> */}

      <div className="flex flex-col justify-center">
        <Hand />
        <Button className="bg-blue-400">Lancer</Button>
      </div>

      <div className="flex justify-center">
        <GameBoard />
      </div>

    </div>
  );
}