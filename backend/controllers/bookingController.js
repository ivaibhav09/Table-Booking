import Booking from '../models/Booking.js';

/**
 * Create a new booking.
 */
export const createBooking = async (req, res) => {
    try {
        const { name, contact, date, time, guests } = req.body;

        // Validate required fields
        if (!name || !contact || !date || !time || !guests) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required to create a booking.'
            });
        }

        // Validate date format (YYYY-MM-DD) and time format (HH:MM)
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        const timePattern = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;

        if (!date.match(datePattern)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid date format. Please use YYYY-MM-DD.'
            });
        }

        if (!time.match(timePattern)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid time format. Please use HH:MM (24-hour format).'
            });
        }

        // Check for existing booking in the same slot
        const exists = await Booking.findOne({ date, time });
        if (exists) {
            return res.status(400).json({
                success: false,
                message: 'Slot already booked. Please choose another time slot.'
            });
        }

        // Create and save a new booking
        const booking = new Booking({ name, contact, date, time, guests });
        await booking.save();

        return res.status(201).json({
            success: true,
            message: 'Booking successful.',
            data: booking
        });
    } catch (error) {
        console.error('Error while creating booking:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error. Please try again later.'
        });
    }
};

/**
 * Retrieve all bookings.
 */
export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();

        if (bookings.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No bookings found.'
            });
        }

        return res.status(200).json(bookings);
    } catch (error) {
        console.error('Error while fetching bookings:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error. Please try again later.'
        });
    }
};

/**
 * Delete a booking by ID.
 */
export const deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ID parameter
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Booking ID is required for deletion.'
            });
        }

        const deletedBooking = await Booking.findByIdAndDelete(id);

        // Check if the booking exists
        if (!deletedBooking) {
            return res.status(404).json({
                success: false,
                message: 'Booking not found. Unable to delete.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Booking deleted successfully.',
            data: deletedBooking
        });
    } catch (error) {
        console.error('Error while deleting booking:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error. Please try again later.'
        });
    }
};
