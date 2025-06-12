import { Dispatch, SetStateAction } from "react";
import { Icon, Player } from "./types";

// possible ways to win by row
const rowWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
// possible ways to win by column

const columnWins = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
// possible ways to win by diagonal

const diagonalWins = [
  [0, 4, 8],
  [2, 4, 6],
];

const winConditions = [...rowWins, ...columnWins, ...diagonalWins];

export const checkWinner = (board: string[]) => {
  for (const [a, b, c] of winConditions) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (board.every(Boolean)) return "draw";

  return null;
};

interface ResetGameParams {
  setSquares: Dispatch<SetStateAction<string[]>>;
  setTurn: Dispatch<SetStateAction<{ player: Player; icon: Icon }>>;
  setWinner: Dispatch<SetStateAction<string | null>>;
  setTimer: Dispatch<SetStateAction<number>>;
  gameCounter: number;
  setGameCounter: Dispatch<SetStateAction<number>>;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
  setPlayers: Dispatch<SetStateAction<{ p1: string; cpu: string }>>;
}

export const resetGame = ({
  setSquares,
  setTurn,
  setWinner,
  setTimer,
  gameCounter,
  setGameCounter,
  setGameStarted,
  setPlayers,
}: ResetGameParams) => {
  // let the player alternate games with the cpu
  let nextTurn: { player: Player; icon: Icon };

  if (gameCounter % 2 === 1) {
    nextTurn = { player: "p1", icon: "X" };
    setPlayers({ p1: "X", cpu: "O" });
  } else {
    nextTurn = { player: "cpu", icon: "X" };
    setPlayers({ p1: "O", cpu: "X" });
  }

  setGameStarted(false);
  setSquares(Array(9).fill(null));
  setWinner(null);
  setTimer(5000);
  setTurn(nextTurn);
  setGameCounter((prev) => prev + 1);
  return nextTurn;
};
