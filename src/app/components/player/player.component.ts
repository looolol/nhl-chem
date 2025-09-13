import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DEFAULT_PLAYER, Player} from '../../models/players';
import {MatCardModule} from '@angular/material/card';
import {ShortMoneyPipe} from '../../common/ShortMoneyPipe';
import {CommonModule} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {PlayerSearchDialogComponent} from '../player-search-dialog/player-search-dialog.component';
import {TeamService} from '../../services/team.service';

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
  @Input() player: Player = DEFAULT_PLAYER;
  @Input() index!: number;

  @Output() playerUpdated = new EventEmitter<{player: Player, index: number}>

  protected readonly DEFAULT_PLAYER = DEFAULT_PLAYER;

  constructor(private dialog: MatDialog) {}

  onCardClick(): void {
    if (this.player.name === this.DEFAULT_PLAYER.name) {
      const dialogRef = this.dialog.open(PlayerSearchDialogComponent, {
        width: '600px',
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.playerUpdated.emit({ player: result, index: this.index });
        }
      });
    }
  }
}
