import { Injectable } from '@angular/core';
import { Tile } from './tile';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  player: 'x' | 'o' = 'x';
  tiles: Tile[] = Array.from(new Array(9), () => {
    return { value: ' ', filled: false };
  });

  winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  constructor() {}

  switchPlayer(): void {
    this.player === 'x' ? (this.player = 'o') : (this.player = 'x');
  }

  fillTile(tile: Tile): void {
    if (!tile.filled) {
      tile.value = this.player;
      tile.filled = true;
    }
  }

  playTurn(tile: Tile) {
    this.fillTile(tile);

    // Array hardcoded in until playerMove storage is implemented
    if (!this.checkForWinner([0, 0])) {
      this.switchPlayer();
    }
  }

  checkForWinner(playerMoves: number[]): [number, number, number] | null {
    let winningCombination = null;
    let isWinningCombination = false;

    this.winningCombinations.forEach((combination) => {
      isWinningCombination = true;

      combination.forEach((number) => {
        if (!playerMoves.includes(number)) {
          isWinningCombination = false;
        }
      });

      if (isWinningCombination) {
        winningCombination = combination;
      }
    });

    return winningCombination;
  }
}
