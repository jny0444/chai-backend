import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// connect using different internet and not SRMIST

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected! DB Hose: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB: Connection error ", error);
        process.exit(1)
    }
}

export default connectDB;