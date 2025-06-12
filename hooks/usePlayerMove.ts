import { Icon, Player } from "@/utils/types";
import { useCallback } from "react";

interface UsePlayerMoveParams {
  squares: string[];
  setSquares: React.Dispatch<React.SetStateAction<string[]>>;
  turn: { player: Player; icon: Icon };
  setTurn: React.Dispatch<React.SetStateAction<{ player: Player; icon: Icon }>>;
  winner: string | null;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const usePlayerMove = ({
  squares,
  setSquares,
  turn,
  setTurn,
  winner,
  setTimer,
  setGameStarted,
}: UsePlayerMoveParams): any => {
  // Check for winner after each move

  // Handle player's move
  const handlePress = useCallback(
    (index: number) => {
      if (squares[index] || winner || turn.player !== "p1") return;
      setGameStarted(true);
      setSquares((prev) => {
        const updated = [...prev];
        updated[index] = turn.icon;
        return updated;
      });

      setTurn((prev) => ({
        icon: prev.icon === "X" ? "O" : "X",
        player: prev.player === "p1" ? "cpu" : "p1",
      }));

      setTimer(5000);
    },
    [
      squares,
      winner,
      turn.player,
      turn.icon,
      setGameStarted,
      setSquares,
      setTurn,
      setTimer,
    ]
  );

  return { handlePress };
};
