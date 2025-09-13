import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {CommonModule} from '@angular/common';
import {TeamSectionComponent} from '../team-section/team-section.component';
import {PlayerList} from '../../models/player-list';

@Component({
  selector: 'app-team',
  imports: [
    CommonModule,
    TeamSectionComponent,
    MatGridListModule,
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  protected readonly PlayerList = PlayerList;
}
