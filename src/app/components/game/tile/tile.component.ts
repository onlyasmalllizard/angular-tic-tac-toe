import { Component, OnInit, Input } from '@angular/core';
import { Tile } from '../../../models/tile.model';
import { GameService } from '../../../services/game/game.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input() info?: Tile;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {}

  selectTile(): void {
    this.gameService.playTurn(this.info!);
  }
}
