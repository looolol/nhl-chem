import { Injectable } from '@angular/core';
import {Player} from '../models/players';
import {BehaviorSubject, Observable} from 'rxjs';
import {mockDefense, mockForwards, mockGoalies} from '../models/mock-data';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  private forwardsSubject = new BehaviorSubject<(Player | null)[]>(mockForwards);
  private defenseSubject = new BehaviorSubject<(Player | null)[]>(mockDefense);
  private goaliesSubject = new BehaviorSubject<(Player | null)[]>(mockGoalies);

  forwards$: Observable<(Player | null)[]> = this.forwardsSubject.asObservable();
  defense$: Observable<(Player | null)[]> = this.defenseSubject.asObservable();
  goalies$: Observable<(Player | null)[]> = this.goaliesSubject.asObservable();

}
