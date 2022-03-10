import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';
import { Tile } from './tile';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should switch player from x to o and back', () => {
    service.switchPlayer();
    expect(service.player).toBe('o');

    service.switchPlayer();
    expect(service.player).toBe('x');
  });

  it('should fill an empty tile correctly and update its value', () => {
    const tile: Tile = { value: ' ', filled: false };

    service.fillTile(tile);

    expect(tile.value).not.toBe(' ');
    expect(tile.filled).toBe(true);
  });

  it('should leave the tile unchanged if sent a filled tile', () => {
    const tile: Tile = { value: 'o', filled: true };

    service.fillTile(tile);
    expect(tile.value).toBe('o');
    expect(tile.filled).toBe(true);
  });

  it('should update player upon changing a tile from unfilled to filled', () => {
    const currentPlayer = service.player;
    const tile: Tile = { value: ' ', filled: false };

    service.fillTile(tile);

    expect(service.player).not.toBe(currentPlayer);
  });

  it('should return the winning tiles when a player has won', () => {
    const movesWithWin = [2, 3, 4, 6, 8];
    const expected = [2, 4, 6];

    const winState = service.checkForWinner(movesWithWin);
    expect(winState).toStrictEqual(expected);

    const movesWithoutWin = [1, 3, 6, 8];
    const noWinState = service.checkForWinner(movesWithoutWin);
    expect(noWinState).toBe(null);
  });
});
