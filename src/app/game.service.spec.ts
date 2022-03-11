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
    expect(service.currentPlayer).toBe('o');

    service.switchPlayer();
    expect(service.currentPlayer).toBe('x');
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
    const currentPlayer = service.currentPlayer;
    const tile: Tile = { value: ' ', filled: false };

    service.playTurn(tile);

    expect(service.currentPlayer).not.toBe(currentPlayer);
  });

  it('should not switch player if the game has been won', () => {
    const fillTile = jest.spyOn(service, 'fillTile');
    const checkForWinner = jest.spyOn(service, 'checkForWinner');

    checkForWinner.mockImplementation(() => {
      return [0, 1, 2];
    });

    const currentPlayer = service.currentPlayer;
    const tile: Tile = { value: ' ', filled: false };

    service.playTurn(tile);

    expect(service.currentPlayer).toBe(currentPlayer);

    fillTile.mockRestore();
    checkForWinner.mockRestore();
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

  it(`should add the array index of selected tile to the player's moves`, () => {
    const move = service.tiles[5];

    service.recordMove(move);

    expect(service.playerMoves[service.currentPlayer]).toContain(5);
  });

  it('should not add rubbish data to playerMoves', () => {
    const move: Tile = { value: ' ', filled: false };

    service.recordMove(move);

    expect(service.playerMoves[service.currentPlayer]).not.toContain(-1);
  });

  it('should not allow additional moves to be made if the game has been won', () => {
    const fillTile = jest.spyOn(service, 'fillTile');
    const recordMove = jest.spyOn(service, 'recordMove');

    const checkForWinner = jest.spyOn(service, 'checkForWinner');
    checkForWinner.mockImplementation(() => {
      return [0, 1, 2];
    });

    service.playTurn({ value: ' ', filled: false });

    expect(fillTile).not.toHaveBeenCalled();
    expect(recordMove).not.toHaveBeenCalled();

    checkForWinner.mockRestore();
  });
});
