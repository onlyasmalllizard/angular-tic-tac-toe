import { Injectable } from '@angular/core';
import { Tile } from './tile';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  player: 'x' | 'o' = 'x';
  winningCombinations = {
    rows: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    columns: [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ],
    diagonals: [
      [0, 4, 8],
      [2, 4, 6],
    ],
  };

  constructor() {}

  switchPlayer(): void {
    this.player === 'x' ? (this.player = 'o') : (this.player = 'x');
  }

  fillTile(tile: Tile): void {
    if (!tile.filled) {
      tile.value = this.player;
      tile.filled = true;
      this.switchPlayer();
    }
  }
}
