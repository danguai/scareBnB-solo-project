import React from "react";

import { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import LoginForm from '../LoginFormModal';
import SignupForm from '../SignUpModal';
import PlaceForm from "../PlaceFormModal";
import ReviewForm from "../ReviewForm";
import ReviewsList from "../ReviewsList";

import { getPlace, deletePlace } from '../../store/places';

import { displayModalPlaceForm } from "../../store/places";
import { displayModalReviewForm } from "../../store/reviews";

import './OnePlacePage.css';

const OnePlacePage = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const history = useHistory();

    const place = useSelector(state => state.places.place);
    const reviews = useSelector(state => state.reviews.reviewsList);

    const sessionUser = useSelector(state => state.session.user);


    useEffect(() => {
        dispatch(getPlace(id));
    }, [dispatch]);

    const shouldDisplayLogin = useSelector(state => state.session.shouldDisplayLogin);
    const shouldDisplaySignup = useSelector(state => state.session.shouldDisplaySignup);
    const shouldDisplayPlaceForm = useSelector(state => state.places.shouldDisplayPlaceForm);
    const shouldDisplayReviewForm = useSelector(state => state.reviews.shouldDisplayReviewForm);

    if (!place) return null;

    let userCanEdit;
    if (place.userId === sessionUser.id) {
        userCanEdit = true;
    }


    return (
        <div id="places">
            <div className="places__and__reviews">
                <div className="places__container">
                    <div className="tittle__bar">
                        <h1>{place.address}</h1>
                        <div className="buttons__bar">
                            {userCanEdit && <button
                                className='user__button logged__in__button'
                                onClick={() => dispatch(displayModalPlaceForm(place))}
                            >Edit Place
                            </button>}
                            {userCanEdit && <button
                                className='user__button logged__in__button'
                                onClick={() => {
                                    dispatch(deletePlace(place.id))
                                    history.push(`/`);
                                }}
                            >Delete Place
                            </button>}
                        </div>
                    </div>
                    <div>
                        <ul className="info__place">
                            <li>Rating: {place.rating}</li>
                            <li>Reviews</li>
                            <li>Location</li>
                            <li>Share</li>
                            <li>Favorite</li>
                        </ul>
                    </div>
                </div>
                <div id='place__photos__container'>
                    <img className='place__photo__01' src={require('../../images/HauntedHouse-1.png')} />
                    <img className='place__photo__02' src={require('../../images/HauntedHouse-2.png')} />
                    <img className='place__photo__03' src={require('../../images/HauntedHouse-3.png')} />
                    <img className='place__photo__04' src={require('../../images/HauntedHouse-4.png')} />
                    <img className='place__photo__05' src={require('../../images/HauntedHouse-5.png')} />
                </div>
                <div className="description__reservation">
                    <div className="place__description">
                        <h3>What you are getting</h3>
                        <ul className="disamenities">
                            <li>Cemetery view</li>
                            <li>Dial-up</li>
                            <li>Outdoor Bathroom</li>
                            <li>Abandon Nursery</li>
                            <li>Creepy Basement</li>
                        </ul>
                    </div>

                </div>
                <div className="reviews__container">
                    {!userCanEdit && <button
                        className='reviews__button__create'
                        onClick={() => dispatch(displayModalReviewForm())}
                        type="submit"
                    >Create Review
                    </button>}
                    {<ReviewsList />}
                </div>
            </div>
            {shouldDisplaySignup && <SignupForm />}
            {shouldDisplayLogin && <LoginForm />}
            {shouldDisplayPlaceForm && <PlaceForm />}
            {shouldDisplayReviewForm && <ReviewForm />}
        </div >
    )
};

export default OnePlacePage;
