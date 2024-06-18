import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieService from '../../services/MovieService';
import './Movies.css'; // Assume you have CSS for basic styling

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const data = await MovieService.getMovieById(id);
            setMovie(data);
        };

        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-details">
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default MovieDetails;
