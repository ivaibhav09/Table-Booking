import express from "express";
import { config } from "dotenv";
import cors from "cors";

import connectDB from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import bookingRouter from "./routes/bookingRouter.js";

config({ path: "./config.env" });

// Create Express app
const app = express();



app.use(
    cors({
        origin:
            process.env.NODE_ENV === "production"
                ? "https://table-booking-vaibhav-mishras-projects-d7164fe4.vercel.app/" // Replace with your production domain
                : "http://localhost:3000", // For local development
        methods: ["GET", "POST", "DELETE", "PUT"],
        credentials: true,
    })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/table", bookingRouter);


app.use(errorMiddleware);

connectDB();
export default app;
