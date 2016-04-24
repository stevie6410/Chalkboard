import { Injectable } from 'angular2/core';
import {Http, HTTP_BINDINGS, Response, Headers} from 'angular2/http';
import { Observable } from 'rxjs/Rx';


import {GameMode, Player, Game, GameCreate} from './models';

var _js: any;

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

    createGame(game: GameCreate) {
        console.log(JSON.stringify(game));

        var apiMethod = "/Games";
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var body: string = JSON.stringify(game);
        
        return this._http.post(this.baseUrl + apiMethod, body, { headers: headers })
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private convertToGameCreateDTO(game: Game) {
        var gameCreate = new GameCreate();
        gameCreate.GameName = game.GameName;
        gameCreate.IsFinished = game.IsFinished;
        gameCreate.GameMode = game.GameMode.GameModeID;
        //gameCreate.Players; 
        game.PlayerGames.forEach(pg => gameCreate.Players.push(pg.Player.PlayerID));
        return gameCreate;
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



