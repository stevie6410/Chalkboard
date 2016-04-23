//Angular Imports
import { Component, OnInit, Input } from 'angular2/core';

//Chalkboard Imports
import {ApiService} from '../../services/api-service';
import {GameMode, Player, Game} from '../../services/models';

@Component({
    selector: 'game-board',
    templateUrl: 'app/components/score-board/game-board.html',
    providers: [
        ApiService
    ]
})
export class GameBoardComponent implements OnInit {
    
    constructor() { }

    ngOnInit() { }

}