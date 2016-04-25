import { Injectable } from 'angular2/core';
import {Http, HTTP_BINDINGS, Response, Headers} from 'angular2/http';
import { Observable } from 'rxjs/Rx';


import {GameMode, Player, Game, GameCreate, Throw, ThrowCreate} from './models';

var _js: any;

@Injectable()
export class ApiService {

    baseUrl: string = "http://chalkboard.azurewebsites.net/services/api"
    headers: Headers;
    
    constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
     }

    getGameModes() {
        var apiMethod: string = "/GameModes";
        console.log(this.baseUrl + apiMethod);
        // return this._http.get(this.baseUrl + apiMethod)
        //     .do(data => console.log(data));

        return this._http.get(this.baseUrl + apiMethod)
            .map((response: Response) => <GameMode[]>response.json())
            //.toPromise()
            .do(data => this.printData("GameModes", data))
            .catch(this.handleError);
    }

    getPlayers() {
        var apiMethod: string = "/Players";
        return this._http.get(this.baseUrl + apiMethod)
            .map((response: Response) => <Player[]>response.json())
            .do(data => this.printData("Players", data))
            .catch(this.handleError);
    }

    getGame(gameId: number) {
        var apiMethod: string = "/Games/" + gameId;
        return this._http.get(this.baseUrl + apiMethod)
            .map((response: Response) => <Game>response.json())
            .do(data => this.printData("Game", data))
            .catch(this.handleError);
    }
    
    createThrow(newThrow: ThrowCreate){
         var apiMethod = "/Throws";
         var body: string = JSON.stringify(newThrow);

         console.log(body);
         
         return this._http.post(this.baseUrl + apiMethod, body, {headers: this.headers})
         .map((response: Response) => response.json())
         .catch(this.handleError);
    }

    createGame(game: GameCreate) {
        var apiMethod = "/Games";
        var body: string = JSON.stringify(game);
        
        return this._http.post(this.baseUrl + apiMethod, body, { headers: this.headers })
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    
    private printData(name: string, data: any) {
        console.log("ApiService result for " + name);
        console.log(data);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}



