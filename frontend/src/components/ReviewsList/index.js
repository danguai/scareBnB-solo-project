import React from "react";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory, useParams } from 'react-router-dom';

import LoginForm from '../LoginFormModal';
import SignupForm from '../SignUpModal';
import PlaceForm from "../PlaceFormModal";
import ReviewForm from "../ReviewFormModal";

import { getReviews, updateReview, deleteReview } from '../../store/reviews';

import { displayModalReviewForm } from "../../store/reviews";


import './ReviewsList.css';

const ReviewsList = () => {
    const dispatch = useDispatch();
    // const history = useHistory();

    const reviews = useSelector(state => state.reviews.reviewsList);

    const place = useSelector(state => state.places.place);

    const sessionUser = useSelector(state => state.session.user);

    let reviewsList = [];
    reviews.forEach(review => {
        if (review.placeId === place.id) {
            reviewsList.push(review);
        }
    });
    // console.log('ESTE Es MI ARRAY DE REVIEWS', reviewsList);

    useEffect(() => {
        dispatch(getReviews(place.id));
    }, [dispatch]);

    const shouldDisplayLogin = useSelector(state => state.session.shouldDisplayLogin);
    const shouldDisplaySignup = useSelector(state => state.session.shouldDisplaySignup);
    const shouldDisplayPlaceForm = useSelector(state => state.places.shouldDisplayPlaceForm);
    const shouldDisplayReviewForm = useSelector(state => state.reviews.shouldDisplayReviewForm);

    return (
        <div className='reviews__list__container'>
            <div>
                <ul className="reviews__list__box">
                    {reviewsList.map(review => {
                        const userCanEdit = review.userId === sessionUser?.id;
                        return <li
                            className="review__full__message"
                            key={review.id}>
                            <div className="review__tittle__message">
                                <div className="individual__review__title">
                                    {review.title}
                                </div>
                                <div className="individual__review__message">
                                    {review.message}
                                </div>
                            </div>
                            <div className="score__buttons">
                                <div className="individual__review__score">
                                    Score: {review.score}
                                </div>
                                <div className="logged__reviews__button">
                                    {userCanEdit && <button
                                        className='reviews__button__edit'
                                        onClick={() => dispatch(displayModalReviewForm(review))}
                                        type="submit"
                                    >Edit
                                    </button>}
                                    {userCanEdit && <button
                                        className='reviews__button__delete'
                                        onClick={() => dispatch(deleteReview(review))}
                                        type="submit"
                                    >Delete
                                    </button>}
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
            {shouldDisplaySignup && <SignupForm />}
            {shouldDisplayLogin && <LoginForm />}
            {shouldDisplayPlaceForm && <PlaceForm />}
            {shouldDisplayReviewForm && <ReviewForm />}
        </div >
    )
};

export default ReviewsList;
