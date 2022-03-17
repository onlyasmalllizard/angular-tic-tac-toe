export interface Player {
  name: string;
  mark: 'x' | 'o';
  games: {
    played: number;
    won: number;
    lost: number;
  };
}
