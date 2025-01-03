import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true },
    guests: { type: Number, required: true },
    name: { type: String, required: true },
    contact: { type: String, required: true },
});

// Create the model
const Booking = mongoose.model("Booking", bookingSchema);

// Export the model
export default Booking;
