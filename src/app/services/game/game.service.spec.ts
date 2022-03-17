import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';
import { Tile } from '../../models/tile.model';

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
    expect(service.currentPlayer).toBe('o');

    service.switchPlayer();
    expect(service.currentPlayer).toBe('x');
  });

  it('should fill an empty tile correctly and update its value', () => {
    const tile: Tile = { value: ' ', filled: false, winningTile: false };

    service.fillTile(tile);

    expect(tile.value).not.toBe(' ');
    expect(tile.filled).toBe(true);
  });

  it('should leave the tile unchanged if sent a filled tile', () => {
    const tile: Tile = { value: 'o', filled: true, winningTile: false };

    service.fillTile(tile);
    expect(tile.value).toBe('o');
    expect(tile.filled).toBe(true);
  });

  it('should update player upon changing a tile from unfilled to filled', () => {
    const currentPlayer = service.currentPlayer;
    const tile: Tile = { value: ' ', filled: false, winningTile: false };

    service.playTurn(tile);

    expect(service.currentPlayer).not.toBe(currentPlayer);
  });

  it('should not switch player if the game is over', () => {
    const isGameOver = jest.spyOn(service, 'isGameOver');

    isGameOver.mockReturnValue(true);

    const currentPlayer = service.currentPlayer;
    const tile: Tile = { value: ' ', filled: false, winningTile: false };

    service.playTurn(tile);

    expect(service.currentPlayer).toBe(currentPlayer);

    isGameOver.mockRestore();
  });

  it(`should add the array index of selected tile to the player's moves`, () => {
    const move = service.tiles[5];

    service.recordMove(move);

    expect(service.playerMoves[service.currentPlayer]).toContain(5);
  });

  it('should not add rubbish data to playerMoves', () => {
    const move: Tile = { value: ' ', filled: false, winningTile: false };

    service.recordMove(move);

    expect(service.playerMoves[service.currentPlayer]).not.toContain(-1);
  });

  it('should not allow additional moves to be made if the game has been won', () => {
    const fillTile = jest.spyOn(service, 'fillTile');
    const recordMove = jest.spyOn(service, 'recordMove');

    const isGameOver = jest.spyOn(service, 'isGameOver');
    isGameOver.mockReturnValue(true);

    service.playTurn({ value: ' ', filled: false, winningTile: false });

    expect(fillTile).not.toHaveBeenCalled();
    expect(recordMove).not.toHaveBeenCalled();

    isGameOver.mockRestore();
  });
});
