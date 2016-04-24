import { Component, OnInit, Output, EventEmitter } from 'angular2/core';

//Chalkboard Imports
import {Player} from '../../services/models';
import {ApiService} from '../../services/api-service';

@Component({
    selector: 'player-picker',
    templateUrl: 'app/components/player-picker/player-picker.html'
})
export class PlayerPickerComponent implements OnInit {

    selectedPlayers: Player[] = [];
    lobbyPlayers: Player[];
    isLoading: boolean = true;

    constructor(private _apiService: ApiService) { }

    @Output() changed = new EventEmitter();
    
    ngOnInit() {
        this._apiService.getPlayers()
            .subscribe(
            data => this.lobbyPlayers = data,
            err => console.log(err),
            () => this.isLoading = false);
    }

    pickPlayer(player: Player) {
        //Add the player to the selected players list
        this.selectedPlayers.push(player);

        //Remove the player from the lobbyPlayers
        var playerIndex: number = this.lobbyPlayers.indexOf(player);
        this.lobbyPlayers.splice(playerIndex, 1);
                
        //Fire the changed event
        this.changed.emit(player);
    }
    
    public isValid() {        
        return (this.selectedPlayers.length > 0);
    }
}