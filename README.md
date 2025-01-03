#Table Booking Application
A simple web app for booking tables in a restaurant using MERN Stack (MongoDB, Express, React, Node.js).

#Features
Create a booking: Book a table by providing name, contact, date, time, and number of guests.
View bookings: View all existing bookings.
Delete a booking: Delete a booking by ID.

#Tech Stack
Frontend: React, Axios
Backend: Node.js, Express
Database: MongoDB (Mongoose)
Styling: TailwindCSS (optional)

#Project Structure 
Table_Booking_Application/
├── backend/
│   ├── models/
│   │   └── Booking.js
│   ├── routes/
│   │   └── bookingRouter.js
│   ├── controllers/
│   │   └── bookingController.js
│   ├── config.env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── pages/
│   │   ├── index.js
│   │   └── bookings.js
│   ├── components/
│   │   └── BookingForm.js
│   └── package.json
└── .gitignore
