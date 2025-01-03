"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getBookings } from './utils/api'; // Assuming an API call to fetch bookings

const LandingPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookings(); // Fetch bookings from an API
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings(); // Fetch bookings on page load
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-blue-800 to-black-900 flex flex-col items-center justify-center text-white p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="text-center mb-10">
        {/* 3D Animation on Welcome Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__zoomIn animate__delay-1s animate__animated-3d">
          Welcome to Table Booking!
        </h1>
        <p className="text-sm sm:text-lg max-w-lg mx-auto animate__animated animate__fadeIn animate__delay-2s">
          Effortlessly book your favorite restaurant table with ease and confidence. Experience seamless reservations now!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 w-full">
        {/* Card 1 */}
        <div className="bg-orange-400 text-black rounded-lg shadow-lg p-6 transform hover:scale-105 hover:-rotate-2 transition-transform duration-300 ease-in-out">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Quick Reservations</h2>
          <p>Reserve your table instantly with our user-friendly booking system.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black rounded-lg shadow-lg p-6 transform hover:scale-105 hover:rotate-2 transition-transform duration-300 ease-in-out">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Real-Time Availability</h2>
          <p>Check available slots and never miss a dining opportunity.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-green-500 text-black rounded-lg shadow-lg p-6 transform hover:scale-105 hover:-rotate-2 transition-transform duration-300 ease-in-out">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Seamless Experience</h2>
          <p>Enjoy a hassle-free and smooth table booking experience.</p>
        </div>
      </div>

      {/* Book Table Button */}
      <Link href="/home">
        <button className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-800 rounded-lg text-lg sm:text-xl font-semibold shadow-lg transition-all duration-300 w-full sm:w-auto">
          Book your Table now
        </button>
      </Link>

      {/* Check All Bookings Button */}
      <Link href="/home/bookings" className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-800 rounded-lg text-lg sm:text-xl font-semibold shadow-lg transition-all duration-300 w-full sm:w-auto">
        Check All Bookings
      </Link>
    </div>
  );
};

export default LandingPage;
