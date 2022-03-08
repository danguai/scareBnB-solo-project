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
    const [addressError, setAddressError] = useState('');
    const [cityError, setCityError] = useState('');
    const [stateError, setStateError] = useState('');
    const [countryError, setCountryError] = useState('');
    const [zipcodeError, setZipcodeError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [ratingError, setRatingError] = useState('');

    const checkingErrors = (
        addressError ||
        cityError ||
        stateError ||
        countryError ||
        zipcodeError ||
        priceError ||
        ratingError
    );

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
                                onBlur={() => {
                                    const error = validateAddress(address)
                                    if (error) setAddressError(error)
                                }}
                                onFocus={() => { setAddressError('') }}
                                required
                            />
                        </label>
                        {addressError && <div className="errors_style">{addressError}</div>}
                        <label className='places__label'>
                            City
                            <input
                                className='input__places__box'
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                onBlur={() => {
                                    const error = validateCity(city)
                                    if (error) setCityError(error)
                                }}
                                onFocus={() => { setCityError('') }}
                                required
                            />
                        </label>
                        {cityError && <div className="errors_style">{cityError}</div>}
                        <label className='places__label'>
                            State
                            <input
                                className='input__places__box'
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                onBlur={() => {
                                    const error = validateState(state)
                                    if (error) setStateError(error)
                                }}
                                onFocus={() => { setStateError('') }}
                                required
                            />
                        </label>
                        {stateError && <div className="errors_style">{stateError}</div>}
                        <label className='places__label'>
                            Country
                            <input
                                className='input__places__box'
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                onBlur={() => {
                                    const error = validateCountry(country``)
                                    if (error) setCountryError(error)
                                }}
                                onFocus={() => { setCountryError('') }}
                                required
                            />
                        </label>
                        {countryError && <div className="errors_style">{countryError}</div>}
                        <label className='places__label'>
                            Zipcode
                            <input
                                className='input__places__box'
                                type="number"
                                value={zipcode}
                                onChange={(e) => setZipcode(e.target.value)}
                                onBlur={() => {
                                    const error = validateZipcode(zipcode)
                                    if (error) setZipcodeError(error)
                                }}
                                onFocus={() => { setZipcodeError('') }}
                                required
                            />
                        </label>
                        {zipcodeError && <div className="errors_style">{zipcodeError}</div>}
                        <label className='places__label'>
                            Price
                            <input
                                className='input__places__box'
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                onBlur={() => {
                                    const error = validatePrice(price)
                                    if (error) setPriceError(error)
                                }}
                                onFocus={() => { setPriceError('') }}
                                required
                            />
                        </label>
                        {priceError && <div className="errors_style">{priceError}</div>}
                        <label className='places__label'>
                            Rating
                            <input
                                className='input__places__box'
                                type="number"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                onBlur={() => {
                                    const error = validateRating(rating)
                                    if (error) setRatingError(error)
                                }}
                                onFocus={() => { setRatingError('') }}
                                required
                            />
                        </label>
                        {ratingError && <div className="errors_style">{ratingError}</div>}
                    </div>
                    <button className={checkingErrors ? 'places__button__disabled' : 'places__button'}
                        disabled={checkingErrors}
                        type="submit">Create Haunted Place</button>
                </div>
            </form >
        </div >
    )
};

export default PlacesForm;
