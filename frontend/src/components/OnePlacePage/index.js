import React from "react";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import LoginForm from '../LoginFormModal';
import SignupForm from '../SignUpModal';
import PlaceForm from "../PlaceFormModal";


import { restoreUser } from '../../store/session';
import { getPlace, updatePlace, deletePlace } from '../../store/places';



import './OnePlacePage.css';

const OnePlacePage = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const place = useSelector(state => state.places.place);

    useEffect(() => {
        dispatch(getPlace(id));
    }, [dispatch]);

    const handleSubmit = e => {
        e.preventDefault();
    };

    const shouldDisplayLogin = useSelector(state => state.session.shouldDisplayLogin);

    const shouldDisplaySignup = useSelector(state => state.session.shouldDisplaySignup);

    const shouldDisplayPlaceForm = useSelector(state => state.places.shouldDisplayPlacesForm);


    if (!place) return null;

    return (
        <div id="places">
            <div className="places__container">
                <h1>{place.address}</h1>
                <div>
                    <ul className="info__place">
                        <li>Rating</li>
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
                <div className="booking__place">
                    <form onSubmit={handleSubmit}>
                        <ul className="errors">
                            {/* {errors.map((error, idx) => <li key={idx}>{error}</li>)} */}
                        </ul>
                        <div className='reserve__box'>
                            <div className='reserve__title'>
                                Reservation
                            </div>
                            <div className='reserve__welcome'>
                                $100 / Night
                            </div>
                            <div className='info__reserve__box'>

                                <label className='reserve__label'>
                                    Check in
                                    <input
                                        className='input__reserve__box'
                                        type="date"
                                        // value={lastName}
                                        // onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </label>
                                <label className='reserve__label'>
                                    Checkout
                                    <input
                                        className='input__reserve__box'
                                        type="date"
                                        // value={username}
                                        // onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </label>
                                <label className='reserve__label'>
                                    Ghosts
                                    <input
                                        className='input__reserve__box'
                                        type="number"
                                        // value={email}
                                        // onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </label>

                            </div>
                            <button className="reserve__button" type="submit">Reserve</button>
                        </div>
                    </form >
                </div>
            </div>
            {shouldDisplaySignup && <SignupForm />}
            {shouldDisplayLogin && <LoginForm />}
            {shouldDisplayPlaceForm && <PlaceForm />}
        </div >
    )
};

export default OnePlacePage;
