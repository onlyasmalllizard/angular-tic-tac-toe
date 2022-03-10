import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridComponent } from './grid.component';
import { Tile } from '../tile';
import { GameModule } from '../game/game.module';

@Component({ selector: 'app-tile', template: '' })
class TileStubComponent {
  @Input() info?: Tile;
}

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeAll(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridComponent, TileStubComponent],
      imports: [GameModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
