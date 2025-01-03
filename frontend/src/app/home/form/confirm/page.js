"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Confirmation = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-900 via-indigo-800 to-red-900 p-6">
      <div className="flex flex-col sm:flex-row w-full max-w-6xl bg-white shadow-xl rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
        {/* Left SVG Image */}
        <div className="w-full sm:w-1/2 flex justify-center items-center mb-6 sm:mb-0">
          <img
            src="/confirm.png" // Path to your uploaded SVG
            alt="Booking Confirmation"
            width={450}    // Set the desired width
            height={450}   // Set the desired height
            className="animate-pulse"  // Optional animation class
          />
        </div>

        {/* Right Details */}
        <div className="w-full sm:w-1/2 text-left px-6 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Your booking has been successfully confirmed. We are excited to have
            you with us!
          </p>
          
          {/* Button Below the Details */}
          <button
            onClick={() => router.push("/home/bookings")}
            className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            aria-label="Check your Booking Detail"
          >
            Check your Booking Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
