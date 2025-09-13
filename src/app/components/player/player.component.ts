import {Component, Input} from '@angular/core';
import {Player} from '../../models/players';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-player',
  imports: [
    MatCardModule,
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  @Input() player!: Player;
}
