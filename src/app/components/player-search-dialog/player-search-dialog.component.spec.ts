import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearchDialogComponent } from './player-search-dialog.component';

describe('PlayerSearchDialogComponent', () => {
  let component: PlayerSearchDialogComponent;
  let fixture: ComponentFixture<PlayerSearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSearchDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
