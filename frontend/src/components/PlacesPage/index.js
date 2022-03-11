import React from "react";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import LoginForm from '../LoginFormModal/';
import SignupForm from '../SignUpModal/';
import PlaceForm from '../PlaceFormModal/';

import { getPlaces } from '../../store/places';

import './PlacesPage.css';

const PlacesPage = () => {
    const dispatch = useDispatch();
    // const history = useHistory();
    // const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const places = useSelector(state => state.places.placesList);

    console.log('PLACES', places);
    console.log('SESSION USER', sessionUser);

    useEffect(() => {
        dispatch(getPlaces());
    }, [dispatch]);

    // console.log('PLACE USER ID: ', sessionUser.id);
    // console.log('SESSION USER: ', sessionUser);
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
