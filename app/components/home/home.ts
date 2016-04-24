//Angular Imports
import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
//Chalkboard Imports

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        
    }
}