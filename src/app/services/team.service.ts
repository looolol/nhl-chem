import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, delay, map, Observable, of} from 'rxjs';
import {DEFAULT_PLAYER, Player} from '../models/players';
import {PlayerList} from '../models/player-list';
import {Team} from '../models/teams';
import {mockTeam} from '../models/mock-data';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private forwardsSubject = new BehaviorSubject<Player[]>(Array(12).fill(DEFAULT_PLAYER));
  private defenseSubject = new BehaviorSubject<Player[]>(Array(6).fill(DEFAULT_PLAYER));
  private goaliesSubject = new BehaviorSubject<Player[]>(Array(2).fill(DEFAULT_PLAYER));

  forwards$: Observable<Player[]> = this.forwardsSubject.asObservable();
  defense$: Observable<Player[]> = this.defenseSubject.asObservable();
  goalies$: Observable<Player[]> = this.goaliesSubject.asObservable();


  private loadingSubject = new BehaviorSubject<boolean>(true);
  loading$ = this.loadingSubject.asObservable();

  constructor() {
    this.loadTeam()
      .subscribe(team => {
        this.parseTeam(team);
        this.loadingSubject.next(false);
        console.log("Successfully loaded team");
      });
  }

  private loadTeam(): Observable<Team> {
    return this.mockLoadTeam();
  }

  private parseTeam(team: Team) {
    this.forwardsSubject.next(team.forwards);
    this.defenseSubject.next(team.defense);
    this.goaliesSubject.next(team.goalies);
  }

  private mockLoadTeam(): Observable<Team> {
    return of(mockTeam).pipe(
      delay(1500) // simulate network delay
    );
  }


  salaryCap: number = 100_000_000;

  totalSalary$: Observable<number> = this.getAllPlayers$().pipe(
    map(players => players.reduce((sum, p) => sum + p.salary, 0))
  );

  salaryStatus$ = this.totalSalary$.pipe(
    map(total => {
      if (total > this.salaryCap) return 'over';
      if (total > this.salaryCap * 0.8) return 'near';
      return 'ok';
    })
  );

  averageOverall$: Observable<number> = this.getAllPlayers$().pipe(
    map(players => players.reduce((sum, p) => sum + p.overall, 0) / players.length)
  );


  // --- helper to get subject ---
  public getPlayersByListName(list: PlayerList): BehaviorSubject<Player[]> {
    switch(list) {
      case PlayerList.Forwards: return this.forwardsSubject;
      case PlayerList.Defense: return this.defenseSubject;
      case PlayerList.Goalies: return this.goaliesSubject;
    }
  }

  private getAllPlayers$(): Observable<Player[]> {
    return combineLatest([this.forwards$, this.defense$, this.goalies$])
      .pipe(
        map(([f, d, g]) => [...f, ...d, ...g])
      );
  }


  // --- update a player in a list ---
  public swapPlayers(listName: PlayerList, i: number, j: number) {
    const subject = this.getPlayersByListName(listName);
    const players = [...subject.value];
    const temp = players[i];
    players[i] = players[j];
    players[j] = temp;
    subject.next(players);
  }

  public updatePlayer(listName: PlayerList, index: number, player: Player) {
    const subject = this.getPlayersByListName(listName);
    const players = [...subject.value];
    players[index] = player;
    subject.next(players);
  }

  // --- reset a player to default ---
  public resetPlayer(list: PlayerList, index: number) {
    this.updatePlayer(list, index, DEFAULT_PLAYER);
  }

}
