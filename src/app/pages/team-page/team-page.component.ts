import {Component} from '@angular/core';
import {TeamComponent} from '../../components/team/team.component';
import {CommonModule} from '@angular/common';
import {ShortMoneyPipe} from '../../common/ShortMoneyPipe';
import {TeamService} from '../../services/team.service';

@Component({
  selector: 'app-team-page',
  imports: [
    CommonModule,
    ShortMoneyPipe,
    TeamComponent,
  ],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.css'
})
export class TeamPageComponent {

  constructor(public teamService: TeamService) { }

}
