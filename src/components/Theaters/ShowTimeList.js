import React, { useState, useEffect } from 'react';
import TheaterService from '../../services/TheaterService';
import './Theaters.css'; // Assume you have CSS for basic styling

const ShowTimeList = ({ theaterId }) => {
    const [showTimes, setShowTimes] = useState([]);

    useEffect(() => {
        const fetchShowTimes = async () => {
            const data = await TheaterService.getShowTimes(theaterId);
            setShowTimes(data);
        };

        fetchShowTimes();
    }, [theaterId]);

    return (
        <div className="showtime-list">
            <h2>Show Times</h2>
            <ul>
                {showTimes.map(showTime => (
                    <li key={showTime.id}>
                        <h3>{showTime.movieTitle}</h3>
                        <p>{showTime.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowTimeList;
