import React from "react";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
    validateAddress,
    validateCity,
    validateState,
    validateCountry,
    validateZipcode,
    validatePrice,
    validateRating
} from '../../utils/validation';

import * as placesActions from '../../store/places';

import './PlacesForm.css';

const PlacesForm = ({ places }) => {
    const dispatch = useDispatch();

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState(0);
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [errors, setErrors] = useState([]);

    // ERRORS
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const checkingErrors = (firstNameError || lastNameError || usernameError || emailError || passwordError || confirmPasswordError);

    const handleSubmit = e => {
        e.preventDefault();

        return dispatch(placesActions.createPlace({
            address,
            city,
            state,
            country,
            zipcode,
            price,
            rating
        }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });

    };
    return (
        <div className='create__place__container' style={{ 'borderRadius': '20px' }}>
            <form onSubmit={handleSubmit}>
                <ul className="errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className='places__box'>
                    <div className='places__title'>
                        Place
                    </div>
                    <div className='places__welcome'>
                        New Haunted Place
                    </div>
                    <div className='user__pass__box'>
                        <label className='places__label'>
                            Address
                            <input
                                className='input__places__box'
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </label>
                        <label className='places__label'>
                            City
                            <input
                                className='input__places__box'
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </label>
                        <label className='places__label'>
                            State
                            <input
                                className='input__places__box'
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            />
                        </label>
                        <label className='places__label'>
                            Country
                            <input
                                className='input__places__box'
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            />
                        </label>
                        <label className='places__label'>
                            Zipcode
                            <input
                                className='input__places__box'
                                type="number"
                                value={zipcode}
                                onChange={(e) => setZipcode(e.target.value)}
                                required
                            />
                        </label>
                        <label className='places__label'>
                            Price
                            <input
                                className='input__places__box'
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </label>
                        <label className='places__label'>
                            Rating
                            <input
                                className='input__places__box'
                                type="number"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button className='signup__button'
                        type="submit">Create Haunted Place</button>
                </div>
            </form >
        </div >
    )
};

export default PlacesForm;
