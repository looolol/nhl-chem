import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player, DEFAULT_PLAYER } from '../../models/players';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ShortMoneyPipe } from '../../common/ShortMoneyPipe';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    CommonModule,
    ShortMoneyPipe,
    MatCardModule,
  ],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  @Input() player: Player = DEFAULT_PLAYER;
  @Input() index!: number;

  @Output() playerClicked = new EventEmitter<number>();
  @Output() resetPlayer = new EventEmitter<number>();

  readonly DEFAULT_PLAYER = DEFAULT_PLAYER;

  onCardClick() {
    this.playerClicked.emit(this.index);
  }

  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.resetPlayer.emit(this.index);
  }
}
