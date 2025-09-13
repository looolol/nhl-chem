import {Component, OnInit} from '@angular/core';
import {Player} from '../../models/players';
import {ShortMoneyPipe} from '../../common/ShortMoneyPipe';
import {MatGridListModule} from '@angular/material/grid-list';
import {CommonModule} from '@angular/common';
import {TeamSectionComponent} from '../team-section/team-section.component';
import {PlayersService} from '../../services/players.service';
import {PlayerList} from '../../models/player-list';

@Component({
  selector: 'app-team',
  imports: [
    CommonModule,
    ShortMoneyPipe,
    TeamSectionComponent,
    MatGridListModule,
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit{

  forwards: (Player | null)[] = [];
  defense: (Player | null)[] = [];
  goalies: (Player | null)[] = [];

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.playersService.forwards$.subscribe(forwards => {
      this.forwards = forwards;
    })

    this.playersService.defense$.subscribe(defense => {
      this.defense = defense;
    })

    this.playersService.goalies$.subscribe(goalies => {
      this.goalies = goalies;
    })

    this.updateStats();
  }


  totalSalary: number = 0;
  salaryCap: number = 1000000;
  averageOverall: number = 0;

  updateStats() {
    const allPlayers = [...this.forwards, ...this.defense, ...this.goalies].filter(Boolean) as Player[];
    this.totalSalary = allPlayers.reduce((sum, p) => sum + (p.salary || 0), 0);
    this.averageOverall = allPlayers.length > 0 ?
      allPlayers.reduce((sum, p) => sum + (p.overall || 0), 0) / allPlayers.length : 0;
  }

  getSalaryStatus(): string {
    if (this.totalSalary > this.salaryCap) return 'over';
    if (this.totalSalary > this.salaryCap * 0.9) return 'near';
    return 'ok';
  }

  protected readonly PlayerList = PlayerList;
}
