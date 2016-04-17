//Angular Imports
import { Component, OnInit } from 'angular2/core';

//Chalkboard Imports

@Component({
    selector: 'player-count-picker',
    templateUrl: 'app/components/player-count-picker/player-count-picker.html',
    styleUrls: ['app/components/player-count-picker/player-count-picker.css']
})
export class PlayerCountPickerComponent implements OnInit {

    selectedPlayerCount: number = 2;
    errorMessage: any = null;    
    options: number[] = [1,2,3,4];

    constructor() { }

    ngOnInit() {
   
    }

    isSelected(option: number) {
        return (option == this.selectedPlayerCount);
    }
}