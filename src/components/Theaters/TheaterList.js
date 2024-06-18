import React, { useState, useEffect } from 'react';
import TheaterService from '../../services/TheaterService';
import './Theaters.css'; // Assume you have CSS for basic styling

const TheaterList = () => {
    const [theaters, setTheaters] = useState([]);

    useEffect(() => {
        const fetchTheaters = async () => {
            const data = await TheaterService.getTheaters();
            setTheaters(data);
        };

        fetchTheaters();
    }, []);

    return (
        <div className="theater-list">
            <h2>Theaters</h2>
            <ul>
                {theaters.map(theater => (
                    <li key={theater.id}>
                        <h3>{theater.name}</h3>
                        <p>{theater.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TheaterList;
