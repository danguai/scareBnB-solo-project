import React from "react";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginForm from '../LoginFormModal/';
import SignupForm from '../SignUpModal/';
import PlaceForm from '../PlaceFormModal/';

import './PlacesPage.css';

const PlacesPage = ({ places }) => {

    const handleSubmit = e => {
        e.preventDefault();
    };

    const shouldDisplayLogin = useSelector(state => state.session.shouldDisplayLogin);

    const shouldDisplaySignup = useSelector(state => state.session.shouldDisplaySignup);

    const shouldDisplayPlaceForm = useSelector(state => state.places.shouldDisplayPlaceForm);


    return (
        <div>
            <div>
                <ul>
                    <li></li>
                </ul>

            </div>
            {shouldDisplaySignup && <SignupForm />}
            {shouldDisplayLogin && <LoginForm />}
            {shouldDisplayPlaceForm && <PlaceForm />}
        </div >
    )
};

export default PlacesPage;
