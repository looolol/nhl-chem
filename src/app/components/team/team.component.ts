import { Component } from '@angular/core';
import {Player} from '../../models/players';
import {CommonModule} from '@angular/common';
import {PlayerComponent} from '../player/player.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';

type PlayerList = 'forwards' | 'defense' | 'goalies';

@Component({
  selector: 'app-team',
  imports: [
    CommonModule,
    PlayerComponent,
    MatGridListModule,
    DragDropModule,
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  forwards: Player[] = [
    { name: 'LW1', handedness: 'L', overall: 85, salary: 500, country: 'CAN', team: 'TOR', position: 'FWD' },
    { name: 'C1', handedness: 'R', overall: 87, salary: 600, country: 'USA', team: 'NYR', position: 'FWD' },
    { name: 'RW1', handedness: 'R', overall: 84, salary: 520, country: 'SWE', team: 'BOS', position: 'FWD' },
    { name: 'LW2', handedness: 'L', overall: 82, salary: 480, country: 'FIN', team: 'CHI', position: 'FWD' },
    { name: 'C2', handedness: 'R', overall: 86, salary: 590, country: 'CAN', team: 'MTL', position: 'FWD' },
    { name: 'RW2', handedness: 'R', overall: 83, salary: 510, country: 'USA', team: 'LAK', position: 'FWD' },
    { name: 'LW3', handedness: 'L', overall: 80, salary: 450, country: 'SUI', team: 'VAN', position: 'FWD' },
    { name: 'C3', handedness: 'R', overall: 84, salary: 560, country: 'CAN', team: 'EDM', position: 'FWD' },
    { name: 'RW3', handedness: 'R', overall: 81, salary: 470, country: 'RUS', team: 'WSH', position: 'FWD' },
    { name: 'LW4', handedness: 'L', overall: 79, salary: 440, country: 'CAN', team: 'CGY', position: 'FWD' },
    { name: 'C4', handedness: 'R', overall: 82, salary: 530, country: 'USA', team: 'PHI', position: 'FWD' },
    { name: 'RW4', handedness: 'R', overall: 80, salary: 460, country: 'SWE', team: 'DAL', position: 'FWD' },
  ]

  defense: Player[] = [
    { name: 'LD1', handedness: 'L', overall: 85, salary: 550, country: 'CAN', team: 'TOR', position: 'DEF' },
    { name: 'RD1', handedness: 'R', overall: 86, salary: 570, country: 'USA', team: 'NYR', position: 'DEF' },
    { name: 'LD2', handedness: 'L', overall: 83, salary: 520, country: 'SWE', team: 'BOS', position: 'DEF' },
    { name: 'RD2', handedness: 'R', overall: 84, salary: 530, country: 'FIN', team: 'CHI', position: 'DEF' },
    { name: 'LD3', handedness: 'L', overall: 81, salary: 500, country: 'CAN', team: 'MTL', position: 'DEF' },
    { name: 'RD3', handedness: 'R', overall: 82, salary: 510, country: 'USA', team: 'LAK', position: 'DEF' },
  ];

  goalies: Player[] = [
    { name: 'G1', handedness: 'L', overall: 88, salary: 600, country: 'CAN', team: 'EDM', position: 'G' },
    { name: 'G2', handedness: 'R', overall: 85, salary: 550, country: 'SUI', team: 'VAN', position: 'G' },
  ];

  hoveredIndex: number | null = null;

  onDrop(event: CdkDragDrop<number[]>, listName: PlayerList) {
    const draggedIndex = event.item.data;
    const targetIndex = this.hoveredIndex ?? draggedIndex;

    if (draggedIndex === targetIndex) return;

    // Determine list array
    let listArray: Player[];
    switch (listName) {
      case 'forwards': listArray = this.forwards; break;
      case 'defense': listArray = this.defense; break;
      case 'goalies': listArray = this.goalies; break;
    }

    // Swap players
    [listArray[draggedIndex], listArray[targetIndex]] =
      [listArray[targetIndex], listArray[draggedIndex]];

    this.hoveredIndex = null;
  }
}
