import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor() {}

  incrementScore(score: number): number {
    return score + 1;
  }

  resetScore(): number {
    return 0;
  }
}
