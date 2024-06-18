import React, { useState } from 'react';
import BookingService from '../../services/BookingService';
import './Bookings.css'; // Assume you have CSS for basic styling

const SeatSelection = ({ showTimeId }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatSelection = (seat) => {
        setSelectedSeats(prevSelected =>
            prevSelected.includes(seat)
                ? prevSelected.filter(s => s !== seat)
                : [...prevSelected, seat]
        );
    };

    const handleBooking = async () => {
        try {
            await BookingService.bookSeats(showTimeId, selectedSeats);
            alert('Booking successful!');
        } catch (error) {
            console.error("Booking failed", error);
        }
    };

    return (
        <div className="seat-selection">
            <h2>Select Seats</h2>
            <div className="seats">
                {[...Array(30).keys()].map(seat => (
                    <div
                        key={seat}
                        className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                        onClick={() => handleSeatSelection(seat)}
                    >
                        {seat + 1}
                    </div>
                ))}
            </div>
            <button onClick={handleBooking}>Book Seats</button>
        </div>
    );
};

export default SeatSelection;
