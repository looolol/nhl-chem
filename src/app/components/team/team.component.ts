import { Component } from '@angular/core';
import {Player} from '../../models/players';
import {CommonModule} from '@angular/common';
import {PlayerComponent} from '../player/player.component';
import {MatGridListModule} from '@angular/material/grid-list';

type PlayerList = 'forwards' | 'defense' | 'goalies';

@Component({
  selector: 'app-team',
  imports: [
    CommonModule,
    PlayerComponent,
    MatGridListModule,
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

  selectedPlayer: { list: PlayerList; index: number } | null = null;

  selectPlayer(list: PlayerList, index: number) {
    if (!this.selectedPlayer) {
      // First click → highlight this player
      this.selectedPlayer = { list, index };
    } else {
      if (this.selectedPlayer.list !== list) {
        // Clicked a player from a different list → reset selection
        this.selectedPlayer = { list, index };
        return;
      }

      // Second click is in the same list → swap
      this.swapPlayers(this.selectedPlayer, { list, index });
      this.selectedPlayer = null;
    }
  }


  swapPlayers(p1: { list: PlayerList; index: number }, p2: { list: PlayerList; index: number }) {
    let list1: Player[];
    let list2: Player[];

    // Resolve first list
    switch (p1.list) {
      case 'forwards': list1 = this.forwards; break;
      case 'defense': list1 = this.defense; break;
      case 'goalies': list1 = this.goalies; break;
    }

    // Resolve second list
    switch (p2.list) {
      case 'forwards': list2 = this.forwards; break;
      case 'defense': list2 = this.defense; break;
      case 'goalies': list2 = this.goalies; break;
    }

    // Swap
    const temp = list1[p1.index];
    list1[p1.index] = list2[p2.index];
    list2[p2.index] = temp;
  }




}
