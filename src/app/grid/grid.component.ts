import { Component, OnInit } from '@angular/core';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  tiles: TileComponent[] = new Array(9);
  constructor() {}

  ngOnInit(): void {}
}
