import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  filled = false;
  value: ' ' | 'x' | 'o' = ' ';

  constructor() {}

  ngOnInit(): void {}
}
