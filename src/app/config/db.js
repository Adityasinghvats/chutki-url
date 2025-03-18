import mongoose from "mongoose";

const db = process.env.MONGO_URI

export async function connection(){
    try {
        if (mongoose.connections[0].readyState) {
            console.log("Already connected to MongoDB");
            return;
        }

        await mongoose.connect(db, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4,  // Force IPv4
            retryWrites: true,
            retryReads: true,
            connectTimeoutMS: 10000,
        });
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        })
        connection.on('error', (err) => {
            console.log("MongoDB connection error"+err);
            process.exit(1);
        })
    } catch (error) {
        console.log("Something went wrong while conneting to DB");
        console.log(error);
    }
}

export default connection;