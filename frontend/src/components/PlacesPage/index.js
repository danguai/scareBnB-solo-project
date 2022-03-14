import React from "react";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';

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

    const shouldDisplayLogin = useSelector(state => state.session.shouldDisplayLogin);
    const shouldDisplaySignup = useSelector(state => state.session.shouldDisplaySignup);
    const shouldDisplayPlaceForm = useSelector(state => state.places.shouldDisplayPlaceForm);

    if (!places) return null;



    return (
        <div>
            <div id="all__places">
                <ul className="all__places__container">
                    {places.map(place =>
                        <li
                            key={place.id}
                            className='grid__item each__place__container'>
                            <NavLink to={`/places/${place.id}`}>
                                <div className="find__your__place__photo">
                                    <div>
                                        {place.url_image_01 ?
                                            <img className='place__photo' src={place.url_image_01}
                                            /> :
                                            <img className='place__photo' src={require('../../images/HauntedHouse_Template.png')}
                                            />
                                        }
                                    </div>
                                    <div className="title__price">
                                        <div className="find__your__place__title">
                                            {place.title}
                                        </div>
                                        <div className="find__your__place__price">
                                            $ {place.price} / night
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                        </li>)}
                </ul>

            </div>
            {shouldDisplaySignup && <SignupForm />}
            {shouldDisplayLogin && <LoginForm />}
            {shouldDisplayPlaceForm && <PlaceForm />}
        </div >
    )
};

export default PlacesPage;
