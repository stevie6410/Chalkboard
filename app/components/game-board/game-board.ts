//Angular Imports
import { Component, OnInit, Input } from 'angular2/core';
import { RouteParams } from 'angular2/router';

//Chalkboard Imports
import {ApiService} from '../../services/api-service';
import {Game, Player, PlayerGame, GameMode, Throw, ThrowCreate} from '../../services/models';

@Component({
    selector: 'score-board',
    templateUrl: 'app/components/game-board/game-board.html',
    styleUrls: ['app/components/game-board/game-board.css']
})
export class GameBoardComponent implements OnInit {

    gameID: string;
    game: Game;
    currentScore: number = 0;
    isLoading: boolean = true;
    selectedPlayerGame: PlayerGame;
    isLoadingThrow: boolean = false;

    constructor(params: RouteParams, private _apiService: ApiService) {
        this.gameID = params.get("id");
    }

    ngOnInit() {
        this._apiService.getGame(+this.gameID)
            .subscribe(
            data => this.game = data,
            err => console.log(err),
            () => this.isLoading = false);
    }

    playerSelected(playerGame: PlayerGame) {
        this.selectedPlayerGame = playerGame;
    }

    isValidThrow() {
        //TODO: Check that the throw is valid
        return true;
    }

    submitThrow() {
        this.isLoadingThrow = true;

        //Compile the new Throw Object
        var newThrow: Throw = new ThrowCreate();
        newThrow.PlayerGame = this.selectedPlayerGame;
        newThrow.Score = this.currentScore;
        newThrow.Timestamp = new Date();
        newThrow.GoodDarts = 3;

        var response: any;

        this._apiService.createThrow(newThrow)
            .subscribe(
            data => response = data,
            err => console.log(err),
            () => {
                this.isLoadingThrow = false;
                console.log(response);
            });
            
            
    }
}