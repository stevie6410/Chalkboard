import { Injectable } from 'angular2/core';
import {Http, HTTP_BINDINGS, Response} from 'angular2/http';
import { Observable } from 'rxjs/Rx';


import {GameMode, Player} from './models';

@Injectable()
export class ApiService {

    baseUrl: string = "http://chalkboard.azurewebsites.net/services/api"
    
    //baseUrl: string = "http://localhost:59685/api"
        
    constructor(private _http: Http) { }

    getGameModes() {
        var apiMethod: string = "/GameModes";
        console.log(this.baseUrl + apiMethod);
        // return this._http.get(this.baseUrl + apiMethod)
        //     .do(data => console.log(data));
        
        return this._http.get(this.baseUrl + apiMethod)
            .map((response: Response) => <GameMode[]>response.json())
            .do(data => this.printData("GameModes", data))
            .catch(this.handleError);
    }

    getPlayers(){
        var apiMethod: string = "/Players";
         return this._http.get(this.baseUrl + apiMethod)
            .map((response: Response) => <Player[]>response.json())
            .do(data => this.printData("Players", data))
            .catch(this.handleError);
    }
    
    private printData(name:string, data: any){
        console.log("ApiService result for " + name);
        console.log(data);
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}



