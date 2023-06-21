import { connect, connection } from "mongoose";
import config from "../config";


export const connectDB = async () => {
    try {
        await connect(config.mongoDB as string);

        console.log("Database connected successfull!!");

    } catch (error) {
        console.log("Failed to connect database");
    }



}





