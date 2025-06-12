import { Icon, Player } from "@/utils/types";
import { useEffect } from "react";

interface UseTimerParams {
  turn: { player: Player; icon: Icon };
  winner: string | null;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  gameStarted: boolean;
}

export const useTimer = ({
  winner,
  turn,
  setTimer,
  setWinner,
  gameStarted,
}: UseTimerParams) => {
  useEffect(() => {
    if (winner) return;
    if (gameStarted === false) return;
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(countdown);
          setWinner("timeout");
          return 0;
        }
        return prev - 10;
      });
    }, 10);
    return () => clearInterval(countdown);
  }, [setTimer, turn, winner]);
};
