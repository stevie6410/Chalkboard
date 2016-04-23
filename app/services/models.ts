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

export class Game{
    GameID: number;
    GameName: string;
    GameMode: GameMode;
    IsFinished: boolean;
    Players: Player[];        
}