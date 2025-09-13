import { Injectable } from '@angular/core';
import {Player} from '../models/players';
import {mockPlayerData} from '../models/mock-data';
import {delay, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private allPlayers: Player[] = [...mockPlayerData]; // your 50+ mock players

  constructor() { }

  getAllPlayers(): Observable<Player[]> {
    return this.mockGetAllPlayers();
  }

  mockGetAllPlayers(): Observable<Player[]> {
    return of(this.allPlayers).pipe(
      delay(1500) // simulate network latency
    );
  }

  /**
   * Search players by name, team, or country
   */
  searchPlayers(term: string): Observable<Player[]> {
    const lower = term.toLowerCase();
    const filtered = this.allPlayers.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      p.team.toLowerCase().includes(lower) ||
      p.country.toLowerCase().includes(lower)
    );
    return of(filtered).pipe(
      delay(300) // simulate query delay
    );
  }
}
