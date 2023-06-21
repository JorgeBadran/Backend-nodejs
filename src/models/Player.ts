import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs"

import { IPlayer } from "../interfaces/IPlayer";
import { PlayerModel } from "../interfaces/IPlayerMethod";



const PlayerSchama = new Schema({
    firstName: {
        type: String,
        requered: [true, "First name is required!"]
    },
    lastName: {
        type: String,
        requered: [true, "Last name is require"]
    },
    email: {
        type: String,
        requered: [true, "Email is require"],
        unique: true,
        Math: [ /\S+@\S+\.\S+/, "** Email is invelid **"]
    },
    password: {
        type: String,
        requered: [true, "Password is require!"]
    },
    date: {
        type: String
    },
    totalGames: {
        type: Number,
        default: 0
    },
    gameWon: {
        type: Number,
        default: 0
    },
    wonRate: {
        type: Number,
        default: 0
    },
    playHistory_: [Object]
},
    {
        versionKey: false, 
}); 

    PlayerSchama.static("encryptPassword",async (password: string) => {
        const salt = await bcryptjs.genSalt(10);
        return await bcryptjs.hash(password, salt);
    });

    PlayerSchama.static("comparePassword", async (password: string,
        receivedPassword: string) => {
        return await bcryptjs.compare(password, receivedPassword)
    })

export const Player = model<IPlayer, PlayerModel>('Player', PlayerSchama);