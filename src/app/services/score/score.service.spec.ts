import { TestBed } from '@angular/core/testing';

import { ScoreService } from './score.service';

describe('ScoreService', () => {
  let service: ScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should increment a given score correctly', () => {
    const value = 6;
    const expected = 7;

    const actual = service.incrementScore(value);

    expect(actual).toBe(expected);
  });
});
