import React from "react";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginForm from '../LoginFormModal/';
import SignupForm from '../SignUpModal/';

import './PlacesPage.css';

const PlacesPage = ({ places }) => {

    const shouldDisplayLogin = useSelector(state => state.session.shouldDisplayLogin);

    const shouldDisplaySignup = useSelector(state => state.session.shouldDisplaySignup);
    return (
        <div id="places">
            <div className="places__container">
                <h1>Title</h1>
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
            <div className='place__photos'>
                <div>
                    <img className='place__photo__01' src={require('../../images/HauntedHouse.png')} />
                </div>
                <div>
                    <img className='place__photo__02' src={require('../../images/HauntedHouse.png')} />
                </div>
                <div>
                    <img className='place__photo__03' src={require('../../images/HauntedHouse.png')} />
                </div>
                <div>
                    <img className='place__photo__04' src={require('../../images/HauntedHouse.png')} />
                </div>
                <div>
                    <img className='place__photo__05' src={require('../../images/HauntedHouse.png')} />
                </div>
                {shouldDisplaySignup && <SignupForm />}
                {shouldDisplayLogin && <LoginForm />}
            </div >
        </div >
    )
};

export default PlacesPage;
