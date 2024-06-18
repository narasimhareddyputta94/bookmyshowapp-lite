import React, { useState, useEffect } from 'react';
import MovieService from '../../services/MovieService';
import './Movies.css'; // Assume you have CSS for basic styling

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await MovieService.getMovies();
            setMovies(data);
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list">
            <h2>Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
