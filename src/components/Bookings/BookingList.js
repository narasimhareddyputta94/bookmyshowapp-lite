import React, { useState, useEffect } from 'react';
import BookingService from '../../services/BookingService';
import './Bookings.css'; // Assume you have CSS for basic styling

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const data = await BookingService.getBookings();
            setBookings(data);
        };

        fetchBookings();
    }, []);

    return (
        <div className="booking-list">
            <h2>Bookings</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        <h3>{booking.movieTitle}</h3>
                        <p>{booking.theaterName}</p>
                        <p>{booking.showTime}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;
