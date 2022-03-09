import { Injectable } from '@angular/core';
import { Tile } from './tile';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  player: 'x' | 'o' = 'x';

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
