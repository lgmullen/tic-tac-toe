import { makeCPUMove } from "@/utils/cpu";
import { Icon } from "@/utils/types";
import { useEffect } from "react";

interface UseCpuMoveParams {
  squares: string[];
  turn: { player: "p1" | "cpu"; icon: Icon };
  winner: string | null;
  setSquares: React.Dispatch<React.SetStateAction<any[]>>;
  setTurn: React.Dispatch<
    React.SetStateAction<{ player: "p1" | "cpu"; icon: Icon }>
  >;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useCpuMove({
  squares,
  turn,
  winner,
  setSquares,
  setTurn,
  setTimer,
  setGameStarted,
}: UseCpuMoveParams) {
  useEffect(() => {
    if (turn.player !== "cpu" || winner) return;

    const move = makeCPUMove(squares, turn.icon); // calculate move once
    if (move === undefined) return;

    // make a random move between 0.8-3 seconds
    const cpuMoveTime = Math.max(Math.random() * 3000, 800);

    const timeout = setTimeout(() => {
      setGameStarted(true);
      setSquares((prev) => {
        const updated = [...prev];
        updated[move] = turn.icon;
        return updated;
      });

      setTurn((prev) => ({
        icon: prev.icon === "X" ? "O" : "X",
        player: "p1",
      }));
      setTimer(5000);
    }, cpuMoveTime);

    return () => clearTimeout(timeout);
  }, [turn.player, winner, squares]);
}
