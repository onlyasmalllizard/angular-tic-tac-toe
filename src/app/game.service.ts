import { Injectable } from '@angular/core';
import { Tile } from './tile';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  player: 'x' | 'o' = 'x';

  constructor() {}

  switchPlayer() {
    this.player === 'x' ? (this.player = 'o') : (this.player = 'x');
  }

  fillTile(tile: Tile) {
    if (!tile.filled) {
      tile.value = this.player;
      tile.filled = true;
    }
  }
}
