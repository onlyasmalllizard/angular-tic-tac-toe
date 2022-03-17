import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';

describe('PlayerService', () => {
  let service: PlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('generates two players', () => {
    expect(service.players.length).toBe(2);
  });

  it('updates the name of the player associated with the mark sent', () => {
    const nameForPlayerOne = 'Test 1';
    const nameForPlayerTwo = 'Test 2';

    service.updateName('x', nameForPlayerOne);
    service.updateName('o', nameForPlayerTwo);

    expect(service.players[0].name).toBe(nameForPlayerOne);
    expect(service.players[1].name).toBe(nameForPlayerTwo);
  });
});
