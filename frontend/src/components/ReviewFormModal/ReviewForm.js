import React from "react";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createReview } from '../../store/reviews';

import './ReviewForm.css';

const Reviews = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [score, setScore] = useState(0);

    const place = useSelector(state => state.places.place);
    const sessionUser = useSelector(state => state.session.user);

    let reviewToEdit = useSelector(state => state.reviews.reviewToEdit);

    console.log('THIS IS THE PLACE TO EDIT', reviewToEdit);

    const isEditMode = Boolean(reviewToEdit?.id);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const reviewInfo = {
        //     title,
        //     message,
        //     score,
        //     placeId: place.id,
        //     userId: sessionUser.id,
        // };

        // dispatch(createReview(reviewInfo));

        // console.log(reviewInfo);

        // setTitle('');
        // setMessage('');
        // setScore(0);

        try {
            if (isEditMode) {
                const review = await dispatch(updateReview(reviewToEdit));

                console.log('REVIEW IN EDIT MODE', review);
                // history.push(`/places/${place.id}`);

            } else {
                const review = await dispatch(createReview(reviewToEdit));

                console.log('REVIEW NO EDIT', review);

                // history.push(`/places/${place.id}`);

            }
        } catch (error) {
            console.error(error);
        }
    };

    if (!reviewToEdit) {
        reviewToEdit = {
            title: '',
            message: '',
            score: '',
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
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </label>
                        <label className='reviews__label'>
                            Message
                            <textarea
                                className='input__reviews__box input__reviews__message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </label>
                        <label className='reviews__label'>
                            Score
                            <input
                                className='input__reviews__box input__reviews__score'
                                type="number"
                                value={score}
                                onChange={(e) => setScore(e.target.value)}
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
