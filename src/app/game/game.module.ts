import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from '../tile/tile.component';
import { GridComponent } from '../grid/grid.component';

@NgModule({
  declarations: [TileComponent, GridComponent],
  imports: [CommonModule],
  exports: [TileComponent, GridComponent],
})
export class GameModule {}
