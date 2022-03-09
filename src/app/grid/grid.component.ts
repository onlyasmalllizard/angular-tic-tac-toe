import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  tiles: Tile[] = [];
  size = 9;
  constructor() {}

  ngOnInit(): void {
    this.generateTiles();
  }

  generateTiles() {
    for (let i = 0; i < this.size; i++) {
      this.tiles.push({ value: ' ', filled: false });
    }
  }
}
