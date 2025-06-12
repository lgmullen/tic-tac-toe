import { checkWinner } from "@/utils/gameLogicHelpers";
import { useEffect } from "react";

interface UseGameStateLogicParams {
  squares: string[];
  winner: string | null;
  players: { p1: string; cpu: string };
  setScore: React.Dispatch<
    React.SetStateAction<{ p1: number; cpu: number; ties: number }>
  >;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
}

export const useGameStateLogic = ({
  squares,
  winner,
  players,
  setScore,
  setWinner,
}: UseGameStateLogicParams) => {
  useEffect(() => {
    const result = checkWinner(squares);
    if (winner === "timeout") {
      setScore((prev) => ({
        ...prev,
        cpu: prev.cpu + 1,
      }));
      return;
    }

    if (result && !winner) {
      if (result === "draw") {
        setScore((prev) => ({
          ...prev,
          ties: prev.ties + 1,
        }));
        setWinner("draw");
        return;
      }

      const winningPlayer = result === players.p1 ? "p1" : "cpu";

      if (winningPlayer === "p1") {
        setScore((prev) => ({
          ...prev,
          p1: prev.p1 + 1,
        }));
        setWinner("p1");
        return;
      }

      if (winningPlayer === "cpu") {
        setScore((prev) => ({
          ...prev,
          cpu: prev.cpu + 1,
        }));
        setWinner("cpu");
        return;
      }
    }
  }, [players.p1, squares, winner, setScore, setWinner]);
};
