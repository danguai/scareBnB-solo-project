import React from "react";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from "react-router-dom";

import { createReview, setReviewToEdit, updateReview, clearReviewToEdit } from '../../store/reviews';

import { validateScore, validateReviewTitle, validateReviewMessage } from '../../utils/validation';

import './ReviewForm.css';

const Reviews = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [titleErrors, setTitleErrors] = useState([]);
    const [messageErrors, setMessageErrors] = useState([]);

    const checkingErrors = (titleErrors || messageErrors);


    const placeId = useSelector(state => state.places.place.id);

    let reviewToEdit = useSelector(state => state.reviews.reviewToEdit);

    const isEditMode = Boolean(reviewToEdit?.id);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEditMode) {
            await dispatch(updateReview(reviewToEdit));
            dispatch(clearReviewToEdit());
        } else {
            await dispatch(createReview(reviewToEdit));
            dispatch(clearReviewToEdit());
        }

        reviewToEdit = null;
    };

    const handleOnChange = e => {
        if (validateScore(e.target.value)) {
            dispatch(setReviewToEdit({ score: e.target.value, placeId }));
        }

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
                                onBlur={() => {
                                    const error = validateReviewTitle(reviewToEdit.title)
                                    if (error) setTitleErrors(error)
                                }}
                                onFocus={() => { setTitleErrors('') }}
                                required
                            />
                        </label>
                        {titleErrors && <div className="errors__style">{titleErrors}</div>}
                        <label className='reviews__label'>
                            Message
                            <textarea
                                className='input__reviews__box input__reviews__message'
                                value={reviewToEdit.message}
                                onChange={(e) => dispatch(setReviewToEdit({ message: e.target.value, placeId }))}
                                onBlur={() => {
                                    const error = validateReviewMessage(reviewToEdit.message)
                                    if (error) setMessageErrors(error)
                                }}
                                onFocus={() => { setMessageErrors('') }}
                                required
                            />
                        </label>
                        {messageErrors && <div className="errors__style">{messageErrors}</div>}
                        <label className='reviews__label'>
                            Score
                            <input
                                className='input__reviews__box input__reviews__score'
                                type="number"
                                value={reviewToEdit.score}
                                onChange={handleOnChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="centering__review__button">
                        <button className={checkingErrors ? 'login__button__disabled' : 'login__button'}
                            disabled={checkingErrors}
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
