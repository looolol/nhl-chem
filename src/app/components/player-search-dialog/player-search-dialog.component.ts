import {Component, Inject, OnInit} from '@angular/core';
import {Player} from '../../models/players';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {PlayersService} from '../../services/players.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-player-search-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './player-search-dialog.component.html',
  styleUrl: './player-search-dialog.component.css'
})
export class PlayerSearchDialogComponent implements OnInit{

  searchTerm = '';
  players: Player[] = [];
  filteredPlayers: Player[] = [];

  constructor(
    private playerService: PlayersService,
    private dialogRef: MatDialogRef<PlayerSearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.filteredPlayers = [...this.players];
  }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(players => {
      this.players = players;
      this.filteredPlayers = [...this.players];
    })
  }

  onSearchChange() {
    const term = this.searchTerm.toLowerCase();
    this.filteredPlayers = this.players.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.team.toLowerCase().includes(term) ||
      p.country.toLowerCase().includes(term)
    );
  }

  selectPlayer(player: Player) {
    this.dialogRef.close(player);
  }

  close() {
    this.dialogRef.close();
  }
}
