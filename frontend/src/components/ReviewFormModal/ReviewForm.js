import React from "react";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from "react-router-dom";

import { createReview, setReviewToEdit, updateReview } from '../../store/reviews';

import './ReviewForm.css';

const Reviews = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [errors, setErrors] = useState([]);

    const placeId = useSelector(state => state.places.place.id);

    let reviewToEdit = useSelector(state => state.reviews.reviewToEdit);

    const isEditMode = Boolean(reviewToEdit?.id);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEditMode) {
            dispatch(updateReview(reviewToEdit));
        } else {
            dispatch(createReview(reviewToEdit));
        }

        reviewToEdit = null;
    };

    if (!reviewToEdit) {
        reviewToEdit = {
            title: '',
            message: '',
            score: 0,
        };
    }

    return (
        <div className='create__reviews__container'>
            <form onSubmit={handleSubmit}>
                <ul className="errors">
                </ul>
                <div className="reviews__box__w__button">
                    <div className='reviews__box'>
                        <div className="title__review">
                            Review
                        </div>
                        <label className='reviews__label'>
                            Title
                            <input
                                className='input__reviews__box input__reviews__title'
                                type="text"
                                value={reviewToEdit.title}
                                onChange={(e) => dispatch(setReviewToEdit({ title: e.target.value, placeId }))}
                                required
                            />
                        </label>
                        <label className='reviews__label'>
                            Message
                            <textarea
                                className='input__reviews__box input__reviews__message'
                                value={reviewToEdit.message}
                                onChange={(e) => dispatch(setReviewToEdit({ message: e.target.value, placeId }))}
                                required
                            />
                        </label>
                        <label className='reviews__label'>
                            Score
                            <input
                                className='input__reviews__box input__reviews__score'
                                type="number"
                                value={reviewToEdit.score}
                                onChange={(e) => dispatch(setReviewToEdit({ score: e.target.value, placeId }))}
                                required
                            />
                        </label>
                    </div>
                    <div className="centering__review__button">
                        <button
                            className='places__button'
                            type="submit"
                        >Review Haunted Place
                        </button>
                    </div>
                </div>
            </form>
        </div >
    )
};

export default Reviews;
