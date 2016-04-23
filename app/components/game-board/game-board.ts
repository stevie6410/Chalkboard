//Angular Imports
import { Component, OnInit, Input } from 'angular2/core';

//Chalkboard Imports
import {ApiService} from '../../services/api-service';
import {Game, Player, GameMode} from '../../services/models';

@Component({
    selector: 'score-board',
    templateUrl: 'app/components/game-board/game-board.html',
    styleUrls: ['app/components/game-board/game-board.css'],
    providers: [
        ApiService
    ]
})
export class GameBoardComponent implements OnInit {
    
    constructor() { }

    ngOnInit() { }

}