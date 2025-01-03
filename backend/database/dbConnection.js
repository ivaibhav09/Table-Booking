import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
    try {
        // Log to check if the URI is being loaded correctly
        console.log("Connecting to MongoDB:", process.env.MONGO_URI);

        // Connect to the database
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "Restaurant_Data" 
        });

        console.log("MongoDB connected successfully...");
    } catch (error) {
        // Log detailed error message
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;
