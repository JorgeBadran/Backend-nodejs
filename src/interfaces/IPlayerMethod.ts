import { Model } from "mongoose";
import { IPlayer } from "./IPlayer";

export interface PlayerModel extends Model<IPlayer> {
    encryptPassword(password: string): string;
    comparePassword(password: string): string;
}

