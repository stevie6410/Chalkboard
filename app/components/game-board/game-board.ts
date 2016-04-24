//Angular Imports
import { Component, OnInit, Input } from 'angular2/core';
import { RouteParams } from 'angular2/router';

//Chalkboard Imports
import {ApiService} from '../../services/api-service';
import {Game, Player, GameMode} from '../../services/models';

@Component({
    selector: 'score-board',
    templateUrl: 'app/components/game-board/game-board.html',
    styleUrls: ['app/components/game-board/game-board.css']
})
export class GameBoardComponent implements OnInit {
    
    gameID: string;
    game: Game;
    isLoading: boolean = true;
    selectedPlayer: Player;
    
    
    constructor(params: RouteParams, private _apiService: ApiService){
        this.gameID = params.get("id");    
     }

    ngOnInit() {         
        this._apiService.getGame(+this.gameID)
        .subscribe(
            data => this.game = data,
            err => console.log(err),
            () => this.isLoading = false       
        );
    }
    
    playerSelected(player: Player){
        this.selectedPlayer = player;
    }
    
}