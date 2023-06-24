import express, { Application, Express } from "express";
import config from '../config';
import routerGames from '../routes/diceGame.routes';
import routerError404 from "../routes/error404.routes";
import cors from "cors"

import { connectDB } from "../db/config";

/*Clases */
class Server {

    private app: Application;
    private port: string;
    private path = {
        error404: "*",
        games: "/games",
        auth: "/auth",
        players: "/players"
    };


/*Metodos */
    routes() {
        this.app.use(this.path.games, routerGames);
        this.app.use(this.path.error404, routerError404)
    };


    listen(){
        this.app.listen(this.port, () => {
            console.log('listenner on port ${this.port}');
        });
    };

    async dbConnnect() {
        await connectDB();
    };

    middleware(){
        this.app.use(express.json());
        this.app.use(cors());
    };

/*Contructres*/
    constructor() {
        this.app = express();
        this.port = config.port as string;

        /*Metodos*/
        this.routes();
        this.dbConnnect();
        this.middleware();
    };


}

export default Server;