export interface Tile {
  filled: boolean;
  value: ' ' | 'x' | 'o';
  winningTile: boolean;
}
