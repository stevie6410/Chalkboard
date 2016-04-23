//Angular Imports
import { Component, OnInit, Output, EventEmitter } from 'angular2/core';

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
    gameModes: any;
    data: any;
    errorMessage: any = null;
    isLoading: boolean = true;

    @Output() changed = new EventEmitter();

    constructor(private _api: ApiService) { }

    ngOnInit() {
        this._api.getGameModes()
            .subscribe(
            data => this.gameModes = data,
            err => this.logError(err),
            () => this.isLoading = false
            );
    }

    isSelected(mode: GameMode) {
        return (mode == this.selectedGameMode);
    }

    onSelected(mode: GameMode) {
        this.selectedGameMode = mode;
        this.changed.emit(mode);
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

    isValid() {
        return (this.selectedGameMode != null);
    }

}