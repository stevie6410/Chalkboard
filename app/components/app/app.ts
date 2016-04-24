//Angular Imports
import {Component} from 'angular2/core';
import {Http, HTTP_BINDINGS } from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'

//Chalkboard Imports
import {PlayerBoardComponent} from '../player-board/player-board';
import {ApiService} from '../../services/api-service';
import {HomeComponent} from '../home/home';
import {GameSetupComponent} from '../game-setup/game-setup';
import {GameBoardComponent} from '../game-board/game-board';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app/app.html',
    directives: [
      ROUTER_DIRECTIVES,
      PlayerBoardComponent,
      HomeComponent,
      GameSetupComponent
      ],
    providers: [
      ApiService,
      Http,
      HTTP_BINDINGS,
      ROUTER_PROVIDERS
      ]
})
@RouteConfig([
  { path: '/', as: 'Home', component: HomeComponent,  useAsDefault: true  },
  { path: '/game-setup', as: 'GameSetup', component: GameSetupComponent },
  { path: '/game-board/:id', as: 'GameBoard', component: GameBoardComponent }
])
export class AppComponent { }


