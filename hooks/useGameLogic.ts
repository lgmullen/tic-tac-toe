import { useCpuMove } from "@/hooks/useCPUMove";
import { useGameStateLogic } from "@/hooks/useGameStateLogic";
import { usePlayerMove } from "@/hooks/usePlayerMove";
import { useTimer } from "@/hooks/useTimer";
import { resetGame } from "@/utils/gameLogicHelpers";
import { Icon, Player, Score, UseGameReturn } from "@/utils/types";
import { useState } from "react";

export const useGame = (initialMaxTime = 5000): UseGameReturn => {
  const [gameCounter, setGameCounter] = useState(0);
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<{ player: Player; icon: Icon }>({
    player: "p1",
    icon: "X",
  });
  const [players, setPlayers] = useState<{ p1: string; cpu: string }>({
    p1: "X",
    cpu: "O",
  });
  const [winner, setWinner] = useState<string | null>(null);
  const [timer, setTimer] = useState(initialMaxTime);
  const [score, setScore] = useState<Score>({ p1: 0, cpu: 0, ties: 0 });
  const [gameStarted, setGameStarted] = useState(false);

  // handles timer logic
  useTimer({ turn, winner, setTimer, setWinner, gameStarted });

  // this handles the cpu move logic
  useCpuMove({
    squares,
    turn,
    winner,
    setSquares,
    setTurn,
    setTimer,
    setGameStarted,
  });

  // this hook handles the winning state / game start logic
  useGameStateLogic({
    squares,
    winner,
    players,
    setScore,
    setWinner,
  });

  // handles making player moves
  const { handlePress } = usePlayerMove({
    squares,
    setSquares,
    turn,
    setTurn,
    winner,
    setTimer,
    setGameStarted,
  });

  // reset game function
  const reset = () => {
    resetGame({
      setSquares,
      setTurn,
      setWinner,
      setTimer,
      gameCounter,
      setGameCounter,
      setPlayers,
      setGameStarted,
    });
  };

  return {
    squares,
    turn,
    winner,
    score,
    timer,
    handlePress,
    reset,
  };
};
