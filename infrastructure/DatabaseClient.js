import mongoose from "mongoose";

class DatabaseClient {
    initialize(){
        mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('Connected to MongoDB');
            return true;
        })
        .catch((err) => {
            console.error('MongoDB connection error:', err);
            return false;
        });
    }
}

export {DatabaseClient};