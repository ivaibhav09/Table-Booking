"use client"; 
import React, { useState, useEffect } from "react";
import { getBookings } from "../utils/api";
import { useRouter } from "next/navigation"; // Use Next.js router for programmatic navigation

const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availabilityMessage, setAvailabilityMessage] = useState(""); // State for availability message
  const router = useRouter(); // Initialize the router for programmatic navigation

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookings();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setAvailabilityMessage(""); // Reset message when a new date is selected
  };

  const checkBooking = () => {
    const formattedSelectedDate = selectedDate; // 'YYYY-MM-DD' format

    // Check if the selected date is already booked
    const isBooked = bookings.some((booking) => {
      const bookingDate = new Date(booking.date).toISOString().split("T")[0]; // Format date to 'YYYY-MM-DD'
      return bookingDate === formattedSelectedDate;
    });

    if (isBooked) {
      setAvailabilityMessage("This date is already booked. Please choose another date.");
    } else {
      setAvailabilityMessage("This date is available for booking!");
    }
  };

  const handleProceedToBooking = () => {
    if (selectedDate) {
      // Redirect to the form page with the selected date as a query parameter
      router.push(`/home/form?date=${selectedDate}`);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg p-8 flex flex-col md:flex-row items-center transform transition-all hover:scale-105 hover:shadow-3xl">
        {/* Left SVG Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img
            src="/check.png" // Path to your SVG image uploaded in the public folder
            alt="Calendar Icon"
            className="w-72 sm:w-80 md:w-96 h-auto animate-pulse" // Controls the size and optional animation
          />
        </div>

        {/* Right Details */}
        <div className="w-full md:w-1/2 text-left px-6 sm:px-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Select a Date
          </h2>

          <input
            type="date"
            className="w-full border text-gray-900 border-gray-300 rounded-lg p-3 mb-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />

          <button
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            onClick={checkBooking}
            disabled={loading}
          >
            Check Availability
          </button>

          {/* Display the availability message */}
          {availabilityMessage && (
            <div
              className={`mt-4 p-4 rounded-md text-center ${
                availabilityMessage.includes("available")
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {availabilityMessage}
            </div>
          )}

          {/* Only show if the date is available */}
          {selectedDate &&
            !bookings.some((booking) => {
              const bookingDate = new Date(booking.date).toISOString().split("T")[0];
              return bookingDate === selectedDate;
            }) &&
            availabilityMessage.includes("available") && (
              <button
                onClick={handleProceedToBooking} // Trigger the routing
                className="block w-full text-center bg-green-600 text-white py-3 px-6 mt-4 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Proceed to Booking
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;
