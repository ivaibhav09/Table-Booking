"use client";
import React, { useState, useEffect } from "react";
import { getBookings } from "../../utils/api"; // Function to fetch bookings

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all bookings on page load
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookings(); // Fetch bookings from API
        setBookings(data);
      } catch (err) {
        setError("Failed to load bookings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col items-center justify-start text-white p-6 sm:p-8 lg:p-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate__animated animate__fadeIn">
          All Bookings
        </h1>
        <p className="text-lg sm:text-xl max-w-lg mx-auto">
          Here is the summary of all bookings made on our platform.
        </p>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-xl">{error}</p>}

      {/* Loading State */}
      {loading ? (
        <p className="text-xl text-white">Loading bookings...</p>
      ) : (
        <>
          {bookings.length > 0 ? (
            <div className="w-full max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full table-auto bg-white text-black rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-6 text-left text-lg sm:text-xl">Name</th>
                    <th className="py-3 px-6 text-left text-lg sm:text-xl">Date</th>
                    <th className="py-3 px-6 text-left text-lg sm:text-xl">Time</th>
                    <th className="py-3 px-6 text-left text-lg sm:text-xl">Guests</th> 
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-100 transition-colors duration-200"
                    >
                      <td className="py-3 px-6 text-sm sm:text-lg">{booking.name}</td>
                      <td className="py-3 px-6 text-sm sm:text-lg">{new Date(booking.date).toLocaleDateString()}</td>
                      <td className="py-3 px-6 text-sm sm:text-lg">{booking.time}</td>
                      <td className="py-3 px-6 text-sm sm:text-lg">{booking.guests}</td> 
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-xl text-white mt-4">No bookings available.</p>
          )}
        </>
      )}
    </div>
  );
};

export default BookingsPage;
