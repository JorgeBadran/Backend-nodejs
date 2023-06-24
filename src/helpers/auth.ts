import { Player } from "../models/Player";
import {sign} from "jsonwebtoken";

class Auth {

    private firstName: string | undefined;
    private lastName: string | undefined;
    private email: string;
    private date: Date | undefined;
    private password: string;

    constructor(email: string, password: string, firstName: string, lastName: string, date: Date ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.date = new Date();
        this.email = email;
    }

    /*Se instancia los contrutores para conectarlos a la base de datos */
    async register() {
        const player = await new Player({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            date: this.date,
            password: await Player.encryptPassword(this.password)
        });

        const savePlayer = await player.save();
    }

    async login() {
        
    }

}