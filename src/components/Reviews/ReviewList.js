import React, { useState, useEffect } from 'react';
import ReviewService from '../../services/ReviewService';
import './Reviews.css'; // Assume you have CSS for basic styling

const ReviewList = ({ movieId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const data = await ReviewService.getReviews(movieId);
            setReviews(data);
        };

        fetchReviews();
    }, [movieId]);

    return (
        <div className="review-list">
            <h2>Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h3>{review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewList;
