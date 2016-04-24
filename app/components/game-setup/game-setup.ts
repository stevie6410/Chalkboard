//Angular Imports
import { Component, OnInit, ViewChild  } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

//Chalkboard Imports
import {GameMode, Player, Game, PlayerGame, GameCreate} from '../../services/models';
import {GameModePickerComponent} from '../game-mode-picker/game-mode-picker';
import {PlayerPickerComponent} from '../player-picker/player-picker';
import {ApiService} from '../../services/api-service';

@Component({
    selector: 'game-setup',
    templateUrl: 'app/components/game-setup/game-setup.html',
    directives: [
        GameModePickerComponent,
        PlayerPickerComponent,
        ROUTER_DIRECTIVES
    ]
})
export class GameSetupComponent implements OnInit {

    isCreatingGame: boolean = false;
    gameName: string = "Dave's new game";
    createdGame: Game;

    @ViewChild(PlayerPickerComponent) playerPicker: PlayerPickerComponent;
    @ViewChild(GameModePickerComponent) gameModePicker: GameModePickerComponent;

    constructor(private _apiService: ApiService) { }

    ngOnInit() { }

    isValid() {
        if (this.playerPicker != null && this.gameModePicker != null) {
            return (this.playerPicker.isValid() && this.gameModePicker.isValid());
        } else {
            return false;
        }
    }

    createGame() {
        if (this.isValid()) {
            this.isCreatingGame = true;
            var newGame = new GameCreate();
            newGame.GameName = this.gameName;
            newGame.IsFinished = false;
            newGame.GameMode = this.gameModePicker.selectedGameMode.GameModeID;
            newGame.Players = [];
            this.playerPicker.selectedPlayers.forEach(player => { newGame.Players.push(player.PlayerID) });
            this._apiService.createGame(newGame)
                .subscribe(
                data => this.createdGame = data,
                err => console.log(err));
        }
    }
}
