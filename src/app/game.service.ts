import { Injectable } from '@angular/core';
import { Tile } from './tile';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  currentPlayer: 'x' | 'o' = 'x';
  playerMoves: { x: number[]; o: number[] } = {
    x: [],
    o: [],
  };

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
    this.currentPlayer === 'x'
      ? (this.currentPlayer = 'o')
      : (this.currentPlayer = 'x');
  }

  fillTile(tile: Tile): void {
    if (!tile.filled) {
      tile.value = this.currentPlayer;
      tile.filled = true;
    }
  }

  recordMove(move: Tile) {
    const index = this.tiles.findIndex((tile) => tile === move);

    if (index >= 0) {
      this.playerMoves[this.currentPlayer].push(index);
    }
  }

  playTurn(move: Tile) {
    this.fillTile(move);
    this.recordMove(move);

    if (!this.checkForWinner(this.playerMoves[this.currentPlayer])) {
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
