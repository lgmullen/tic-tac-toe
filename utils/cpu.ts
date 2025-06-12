export const makeCPUMove = (board: string[], cpuTurn: string) => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  const canWin = (player: string) => {
    for (const [a, b, c] of winPatterns) {
      const line = [board[a], board[b], board[c]];
      const count = line.filter((x) => x === player).length;
      const emptyIndex = [a, b, c].find((i) => board[i] === null);
      if (count === 2 && emptyIndex !== undefined) return emptyIndex;
    }
    return null;
  };

  // Win if possible
  const winMove = canWin(cpuTurn);
  if (winMove !== null) {
    return winMove;
  }
  // Block Win
  const opponentMove = cpuTurn === "X" ? "O" : "X";
  const opponentWinMove = canWin(opponentMove);
  if (opponentWinMove !== null) {
    return opponentWinMove;
  }
  // Do a random move
  const moveOptions = board
    .map((value, index) => (value ? null : index))
    .filter((i): i is number => i !== null);
  const randomMove = Math.floor(Math.random() * moveOptions.length);
  return moveOptions[randomMove];
};
