import { Component } from '@angular/core';
import {Player} from '../../models/players';
import {CommonModule} from '@angular/common';
import {PlayerComponent} from '../player/player.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import {ShortMoneyPipe} from '../../common/ShortMoneyPipe';

type PlayerList = 'forwards' | 'defense' | 'goalies';

@Component({
  selector: 'app-team',
  imports: [
    CommonModule,
    ShortMoneyPipe,
    PlayerComponent,
    MatGridListModule,
    DragDropModule,
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  salaryCap: number = 100000000;

  forwards: (Player | null)[] = [
    {name: 'LW1', handedness: 'L', overall: 85, salary: 5_000_000, country: 'CAN', team: 'TOR', position: 'FWD'},
    {name: 'C1', handedness: 'R', overall: 87, salary: 6_000_000, country: 'USA', team: 'NYR', position: 'FWD'},
    {name: 'RW1', handedness: 'R', overall: 84, salary: 5_200_000, country: 'SWE', team: 'BOS', position: 'FWD'},
    {name: 'LW2', handedness: 'L', overall: 82, salary: 4_800_000, country: 'FIN', team: 'CHI', position: 'FWD'},
    null,
    {name: 'RW2', handedness: 'R', overall: 83, salary: 5_100_000, country: 'USA', team: 'LAK', position: 'FWD'},
    {name: 'LW3', handedness: 'L', overall: 80, salary: 4_500_000, country: 'SUI', team: 'VAN', position: 'FWD'},
    {name: 'C3', handedness: 'R', overall: 84, salary: 5_600_000, country: 'CAN', team: 'EDM', position: 'FWD'},
    {name: 'RW3', handedness: 'R', overall: 81, salary: 4_700_000, country: 'RUS', team: 'WSH', position: 'FWD'},
    {name: 'LW4', handedness: 'L', overall: 79, salary: 4_400_000, country: 'CAN', team: 'CGY', position: 'FWD'},
    {name: 'C4', handedness: 'R', overall: 82, salary: 5_300_000, country: 'USA', team: 'PHI', position: 'FWD'},
    {name: 'RW4', handedness: 'R', overall: 80, salary: 4_600_000, country: 'SWE', team: 'DAL', position: 'FWD'},
  ]

  defense: (Player | null)[] = [
    {name: 'LD1', handedness: 'L', overall: 85, salary: 5_500_000, country: 'CAN', team: 'TOR', position: 'DEF'},
    {name: 'RD1', handedness: 'R', overall: 86, salary: 5_700_000, country: 'USA', team: 'NYR', position: 'DEF'},
    {name: 'LD2', handedness: 'L', overall: 83, salary: 5_200_000, country: 'SWE', team: 'BOS', position: 'DEF'},
    {name: 'RD2', handedness: 'R', overall: 84, salary: 5_300_000, country: 'FIN', team: 'CHI', position: 'DEF'},
    {name: 'LD3', handedness: 'L', overall: 81, salary: 5_000_000, country: 'CAN', team: 'MTL', position: 'DEF'},
    {name: 'RD3', handedness: 'R', overall: 82, salary: 5_100_000, country: 'USA', team: 'LAK', position: 'DEF'},
  ];

  goalies: (Player | null)[] = [
    {name: 'G1', handedness: 'L', overall: 88, salary: 6_000_000, country: 'CAN', team: 'EDM', position: 'G'},
    {name: 'G2', handedness: 'R', overall: 85, salary: 5_500_000, country: 'SUI', team: 'VAN', position: 'G'},
  ];


  hovered: { list: PlayerList; index: number } | null = null;
  dragged: { list: PlayerList; index: number } | null = null;

  cdkDragStarted(list: PlayerList, index: number) {
    this.dragged = {list, index};
  }

  onMouseEnter(list: PlayerList, index: number) {
    // Only track hovered tiles if a tile is currently being dragged
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

  onDrop(event: CdkDragDrop<number[]>, listName: PlayerList) {
    if (!this.dragged) return;

    const draggedIndex = this.dragged.index;
    const target = this.hovered;

    // Only swap if hovered exists and belongs to the same list
    if (!target || target.list !== listName || target.index === draggedIndex) {
      this.hovered = null;
      this.dragged = null;
      return;
    }

    let listArray: (Player | null)[];
    switch (listName) {
      case 'forwards':
        listArray = this.forwards;
        break;
      case 'defense':
        listArray = this.defense;
        break;
      case 'goalies':
        listArray = this.goalies;
        break;
    }

    // Perform the swap
    [listArray[draggedIndex], listArray[target.index]] =
      [listArray[target.index], listArray[draggedIndex]];

    this.hovered = null;
    this.dragged = null;
  }


  get totalSalary(): number {
    return [...this.forwards, ...this.defense, ...this.goalies]
      .filter( player => player != null)
      .reduce((sum, player) => sum + player.salary, 0);
  }

  getSalaryStatus(): 'over' | 'near' | 'ok' {
    if (this.totalSalary > this.salaryCap) return 'over';
    if (this.totalSalary > 0.8 * this.salaryCap) return 'near';
    return 'ok';
  }

  get averageOverall(): number {
    const all = [...this.forwards, ...this.defense, ...this.goalies];
    return all
      .filter(player => player != null)
      .reduce((sum, p) => sum + p.overall, 0) / all.length;
  }

}
