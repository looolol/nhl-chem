import { Routes } from '@angular/router';
import {TeamPageComponent} from './pages/team-page/team-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'team', pathMatch: 'full' },
  { path: 'team', component: TeamPageComponent },
];
