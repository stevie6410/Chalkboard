//Angular Imports
import { Component, OnInit } from 'angular2/core';

//Chalkboard Imports
import {GameMode} from '../../services/models';
import {GameModePickerComponent} from '../game-mode-picker/game-mode-picker';
import {PlayerCountPickerComponent} from '../player-count-picker/player-count-picker';

@Component({
    selector: 'game-setup',
    templateUrl: 'app/components/game-setup/game-setup.html',
    directives: [
        GameModePickerComponent,
        PlayerCountPickerComponent
    ]
})
export class GameSetupComponent implements OnInit {

    selectedGameMode: GameMode = null;

    constructor() { }

    ngOnInit() { }
}