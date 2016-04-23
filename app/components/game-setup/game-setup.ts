//Angular Imports
import { Component, OnInit, ViewChild  } from 'angular2/core';

//Chalkboard Imports
import {GameMode, Player} from '../../services/models';
import {GameModePickerComponent} from '../game-mode-picker/game-mode-picker';
import {PlayerPickerComponent} from '../player-picker/player-picker';

@Component({
    selector: 'game-setup',
    templateUrl: 'app/components/game-setup/game-setup.html',
    directives: [
        GameModePickerComponent,
        PlayerPickerComponent
    ]
})
export class GameSetupComponent implements OnInit {

    selectedGameMode: GameMode = null;
    selectedPlayers: Player[];
    isCreatingGame: boolean = false;
    
    @ViewChild(PlayerPickerComponent) playerPicker: PlayerPickerComponent;
    @ViewChild(GameModePickerComponent) gameModePicker: GameModePickerComponent;

    constructor() { }

    ngOnInit() { }

    isValid() {
        if (this.playerPicker != null && this.gameModePicker != null) {
            return (this.playerPicker.isValid() && this.gameModePicker.isValid());
        } else {
            return false;
        }
    }

    childChanged(eventData: any) {
        console.log("something changed in the child components");
    }

    createGame() {
        if (this.isValid()) {
            this.isCreatingGame = true;
            console.log("Creating Game!");

        } else {
            console.log("Invalid Selections");
        }
    }
}
