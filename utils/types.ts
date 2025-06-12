export type Player = "p1" | "cpu";
export type Icon = "X" | "O";

export interface Score {
  p1: number;
  cpu: number;
  ties: number;
}

export interface UseGameReturn {
  squares: string[];
  turn: { player: Player; icon: Icon };
  winner: string | null;
  score: Score;
  timer: number;
  handlePress: (index: number) => void;
  reset: () => void;
}
