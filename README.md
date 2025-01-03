Table Booking Application
A simple web application that allows users to book tables for dining at a restaurant. It provides functionalities for creating, viewing, and deleting bookings. The application is built using MERN Stack (MongoDB, Express, React, Node.js).

Table of Contents
Project Overview
Features
Tech Stack
Installation
Usage
API Endpoints
File Structure
Contributing
License
Project Overview
This Table Booking Application allows users to:

Make a new booking by providing details such as name, contact, date, time, and number of guests.
View all existing bookings with the option to check availability for a specific date and time.
Delete a booking by ID.
The project is built using a React frontend that communicates with a Node.js backend through RESTful API endpoints. MongoDB is used to store booking data in the backend.

Features
Create a booking: Users can submit their booking information.
View all bookings: Users can view a list of all bookings made.
Delete a booking: Users can delete a booking by providing the unique booking ID.
Check availability: Ensure no double-booking by checking the availability of a time slot before confirming a booking.
Tech Stack
Frontend: React, Axios (for making API calls)
Backend: Node.js, Express.js
Database: MongoDB (Mongoose for database interaction)
Authentication: JWT (if applicable)
Styling: TailwindCSS (optional, based on your implementation)
Installation
Prerequisites
Node.js: Ensure that Node.js is installed on your machine. You can download it from here.
MongoDB: If you're running MongoDB locally, ensure it is installed. Alternatively, you can use MongoDB Atlas for a hosted database.
