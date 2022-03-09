import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  player: 'x' | 'o' = 'x';

  constructor() {}

  switchPlayer() {
    this.player === 'x' ? (this.player = 'o') : (this.player = 'x');
  }

  fillTile() {}
}
