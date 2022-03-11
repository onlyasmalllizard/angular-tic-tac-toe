import { Injectable } from '@angular/core';
import { Tile } from './tile';
import { WINNING_COMBINATIONS } from './winningCombinations';

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

  winningCombination?: [number, number, number];
  winningCombinations: [number, number, number][] = WINNING_COMBINATIONS;

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

  recordMove(move: Tile): void {
    const index = this.tiles.findIndex((tile) => tile === move);

    if (index >= 0) {
      this.playerMoves[this.currentPlayer].push(index);
    }
  }

  playTurn(move: Tile): void {
    if (!this.isGameOver()) {
      this.fillTile(move);
      this.recordMove(move);
    }

    if (!this.isGameOver()) {
      this.switchPlayer();
    }
  }

  isGameOver(): boolean {
    // Check whether any moves can be made
    const unfilledTiles = this.tiles.filter((tile) => !tile.filled);
    const spaceForMoreMoves = unfilledTiles.length > 0;

    if (spaceForMoreMoves && !this.isWinner()) {
      return false;
    }

    return true;
  }

  isWinner(): boolean {
    this.identifyWinner();
    if (this.winningCombination) {
      return true;
    } else {
      return false;
    }
  }

  identifyWinner(): void {
    let isWinningCombination = false;
    const playerMoves = this.playerMoves[this.currentPlayer];

    this.winningCombinations.forEach((combination) => {
      isWinningCombination = true;

      combination.forEach((number) => {
        if (!playerMoves.includes(number)) {
          isWinningCombination = false;
        }
      });

      if (isWinningCombination) {
        this.winningCombination = combination;
      }
    });
  }
}
