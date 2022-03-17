import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game/game.service';
import { Tile } from '../../../models/tile.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  tiles: Tile[] = this.gameService.tiles;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {}
}
