import React from "react";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginForm from '../LoginFormModal/';
import SignupForm from '../SignUpModal/';
import PlaceForm from '../PlaceFormModal/';

import getPlaces from '../../components/PlacesPage';

import './PlacesPage.css';

const PlacesPage = ({ places }) => {
    const dispatch = useDispatch();
    // const history = useHistory();

    // const place = useSelector(state => state);

    // let placesList = [];

    // places.forEach(place => {
    //     if (place.placeId === place.id) {
    //         placesList.push(place);
    //     }
    // });
    // console.log('PLACES LIST', placesList);
    // useEffect(() => {
    //     dispatch(getPlaces(place.id));
    // }, [dispatch]);

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
