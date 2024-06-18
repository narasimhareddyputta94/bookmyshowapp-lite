import React, { useState } from 'react';
import ReviewService from '../../services/ReviewService';
import './Reviews.css'; // Assume you have CSS for basic styling

const AddReview = ({ movieId }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ReviewService.addReview(movieId, content);
            setContent('');
            alert('Review added successfully!');
        } catch (error) {
            console.error("Adding review failed", error);
        }
    };

    return (
        <div className="add-review">
            <h2>Add Review</h2>
            <form onSubmit={handleSubmit}>
        <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
        />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddReview;
