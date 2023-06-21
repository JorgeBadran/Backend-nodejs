export interface IPlayer {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    date: string,
    totalGames: number,
    gamesWon: number,
    wonRate: number, 
    playHistory: object[];
}