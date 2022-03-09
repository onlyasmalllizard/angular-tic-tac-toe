import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

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
});
