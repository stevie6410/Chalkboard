//Angular Imports
import { Component, OnInit } from 'angular2/core';

//Chalkboard Imports
import {ApiService} from '../../services/api-service';
import {GameMode} from '../../services/models';

@Component({
    selector: 'game-mode-picker',
    templateUrl: 'app/components/game-mode-picker/game-mode-picker.html',
    styleUrls: ['app/components/game-mode-picker/game-mode-picker.css']
})
export class GameModePickerComponent implements OnInit {

    selectedGameMode: GameMode = null;
    gameModes: GameMode[] = null;
    errorMessage: any = null;

    constructor(private _api: ApiService) { }

    ngOnInit() {
        this._api.getGameModes()
            .subscribe(
            data => this.gameModes = data,
            error => this.errorMessage = <any>error);
    }

    isSelected(mode: GameMode) {
       return (mode == this.selectedGameMode); 
    }
}