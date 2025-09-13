import {Component, Input} from '@angular/core';
import {Player} from '../../models/players';
import {MatCardModule} from '@angular/material/card';
import {ShortMoneyPipe} from '../../common/ShortMoneyPipe';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-player',
  imports: [
    CommonModule,
    ShortMoneyPipe,
    MatCardModule,
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  @Input() player: Player | null = null;
}
