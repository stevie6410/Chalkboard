//Angular Imports
import { Component, OnInit } from 'angular2/core';

//Chalkboard Imports
import {ApiService} from '../../services/api-service';
import {GameMode, Player} from '../../services/models';

@Component({
  selector: 'player-board',
  templateUrl: 'app/components/player-board/player-board.html'
})
export class PlayerBoardComponent implements OnInit {

  errorMessage: string = null;
  gameModes: GameMode[] = null;
  players: Player[] = null;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getGameModes()
      .subscribe(
      data => this.gameModes = data,
      error => this.errorMessage = <any>error
      );


    this._api.getPlayers()
      .subscribe(
      data => this.players = data,
      error => this.errorMessage = <any>error
      );
  }

}