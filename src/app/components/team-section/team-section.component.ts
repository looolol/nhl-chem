import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import {Player} from '../../models/players';
import {MatGridListModule} from '@angular/material/grid-list';
import {PlayerComponent} from '../player/player.component';
import {CommonModule} from '@angular/common';
import {PlayerList} from '../../models/player-list';
import {TeamService} from '../../services/team.service';
import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-team-section',
  imports: [
    CommonModule,
    PlayerComponent,
    MatGridListModule,
    DragDropModule,
  ],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.css'
})
export class TeamSectionComponent implements OnInit {
  rowHeight: string | number = '350px';

  @Input() cols: number = 3;
  @Input() listName!: PlayerList;

  players$: Observable<Player[]> = of([])

  hovered: { list: PlayerList; index: number } | null = null;
  dragged: { list: PlayerList; index: number } | null = null;

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.players$ = this.teamService.getPlayersByListName(this.listName)
    //console.log(this.listName, this.players$);
  }


  cdkDragStarted(list: PlayerList, index: number) {
    this.dragged = { list, index };
  }

  onMouseEnter(list: PlayerList, index: number) {
    console.log('listname', this.listName, 'list', list, 'index', index);
    if (!this.dragged) {
      this.hovered = null;
      return;
    }

    // Ignore hovering over the dragged tile itself
    if (this.dragged.list === list && this.dragged.index === index) {
      this.hovered = null;
      return;
    }

    this.hovered = { list, index };
  }

  onMouseLeave(list: PlayerList, index: number) {
    // Only clear if currently dragging
    if (this.dragged && this.hovered?.list === list && this.hovered?.index === index) {
      this.hovered = null;
    }
  }

  onRightClick(index: number, event: MouseEvent) {
    event.preventDefault();
    this.teamService.resetPlayer(this.listName, index);
  }

  onDrop(event: CdkDragDrop<any[]>, listName: PlayerList) {
    if (!this.dragged || !this.hovered || this.dragged.list !== this.hovered.list) {
      this.hovered = null;
      this.dragged = null;
      return;
    }

    const draggedIndex = this.dragged.index;
    const hoveredIndex = this.hovered.index;

    this.teamService.swapPlayers(listName, draggedIndex, hoveredIndex);

    this.dragged = null;
    this.hovered = null;
  }

  trackByIndex(index: number, item: Player) {
    return index;
  }

  onPlayerUpdated(event: {player: Player; index: number }) {
    this.teamService.updatePlayer(this.listName, event.index, event.player);
  }

}
