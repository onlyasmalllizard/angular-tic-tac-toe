import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  players: Player[] = [
    {
      name: 'Player 1',
      mark: 'x',
      games: {
        played: 0,
        won: 0,
        lost: 0,
      },
    },
    {
      name: 'Player 2',
      mark: 'o',
      games: {
        played: 0,
        won: 0,
        lost: 0,
      },
    },
  ];
  constructor() {}

  updateName(playerMark: 'x' | 'o', newName: string): void {
    const player = this.players.find((person) => person.mark === playerMark);

    if (player) {
      player.name = newName;
    }
  }
}
