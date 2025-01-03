"use client";
import React, { useState } from "react";
import { createBooking } from "@/app/utils/api"; // Adjust the import path for api
import { useSearchParams } from "next/navigation"; // Use the correct hook

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    guests: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams(); // Use the correct hook to access query params
  const date = searchParams.get("date"); // Get the date from the query parameters

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createBooking({ ...formData, date }); // Send form data with date
      // Redirect to confirmation page
      window.location.href = "/home/form/confirm"; // Use window.location for redirection
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row w-full max-w-6xl bg-white shadow-2xl rounded-lg p-6 sm:p-8 transform transition-all hover:scale-105 hover:shadow-3xl">
        {/* Left Side - SVG Image (Uploaded from the public folder) */}
        <div className="w-full sm:w-1/2 flex justify-center items-center mb-6 sm:mb-0">
          <img
            src="/registration.png" // Path to the uploaded SVG in the public folder
            alt="Person Filling Form"
            className="w-full sm:w-96 h-auto"
          />
        </div>

        {/* Right Side - Booking Form */}
        <div className="w-full sm:w-1/2 px-8 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-left mb-6">
            Booking Form for {date}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {/* Name Input */}
            <div>
              <label className="block text-gray-700 text-lg font-semibold">Name:</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 border text-gray-700 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Contact Input */}
            <div>
              <label className="block text-gray-700 text-lg font-semibold">Contact:</label>
              <input
                type="text"
                name="contact"
                className="w-full p-3 border text-gray-700 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>

            {/* Guests Input */}
            <div>
              <label className="block text-gray-700 text-lg font-semibold">Guests:</label>
              <input
                type="number"
                name="guests"
                className="w-full p-3 border text-gray-700 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>

            {/* Time Input */}
            <div>
              <label className="block text-gray-700 text-lg font-semibold">Time:</label>
              <input
                type="time"
                name="time"
                className="w-full p-3 border text-gray-700 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Booking"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
