import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlayerComponent } from '../player/player.component';
import { CommonModule } from '@angular/common';
import { PlayerList } from '../../models/player-list';
import { TeamService } from '../../services/team.service';
import { Observable } from 'rxjs';
import {DEFAULT_PLAYER, Player} from '../../models/players';
import { MatDialog } from '@angular/material/dialog';
import { PlayerSearchDialogComponent } from '../player-search-dialog/player-search-dialog.component';

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    MatGridListModule,
    DragDropModule,
  ],
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.css'],
})
export class TeamSectionComponent implements OnInit {
  @Input() cols = 3;
  @Input() listName!: PlayerList;

  players$!: Observable<Player[]>;

  hovered: { list: PlayerList; index: number } | null = null;
  dragged: { list: PlayerList; index: number } | null = null;

  rowHeight: string | number = '350px';

  constructor(private teamService: TeamService, private dialog: MatDialog) {}

  ngOnInit() {
    this.players$ = this.teamService.getPlayersByListName(this.listName).asObservable();
  }

  cdkDragStarted(list: PlayerList, index: number) {
    this.dragged = { list, index };
  }

  onMouseEnter(list: PlayerList, index: number) {
    if (!this.dragged) return;
    if (this.dragged.list === list && this.dragged.index === index) return;
    this.hovered = { list, index };
  }

  onMouseLeave(list: PlayerList, index: number) {
    if (this.dragged && this.hovered?.list === list && this.hovered?.index === index) {
      this.hovered = null;
    }
  }

  onDrop(event: CdkDragDrop<any[]>, listName: PlayerList) {
    if (!this.dragged || !this.hovered || this.dragged.list !== this.hovered.list) {
      this.dragged = null;
      this.hovered = null;
      return;
    }

    this.teamService.swapPlayers(listName, this.dragged.index, this.hovered.index);

    this.dragged = null;
    this.hovered = null;
  }

  onPlayerClick(index: number) {
    const dialogRef = this.dialog.open(PlayerSearchDialogComponent, { width: '600px', data: {} });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.teamService.updatePlayer(this.listName, index, result);
    });
  }

  onResetPlayer(index: number) {
    this.teamService.resetPlayer(this.listName, index);
  }

  trackByIndex(index: number, _item: Player) {
    return index;
  }

  protected readonly DEFAULT_PLAYER = DEFAULT_PLAYER;
}
