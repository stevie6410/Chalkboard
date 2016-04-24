export class Player {
    PlayerID: number;
    Username: string;
    EmailAddress: string;
}

export class GameMode {
    GameModeID: number;
    Name: string;
    StartingScore: number;
    Description: string;
    SortOrder: number;
}

export class PlayerGame {
    PlayerGameID: number;
    PlayerPos: number;
    Player: Player;
    Game: Game;
    IsWinner: boolean;
    Throws: Throw[];
}

export class Throw{
    ThrowID: number;
    PlayerGame: PlayerGame;
    Score: number;
    GoodDarts: number;
    Timestamp: Date;
}

export class Game{
    GameID: number;
    GameName: string;
    GameMode: GameMode;
    IsFinished: boolean;
    PlayerGames: PlayerGame[];
}

export class GameCreate{
    GameName: string;
    GameMode: number;
    IsFinished: boolean;
    Players: number[];     
}