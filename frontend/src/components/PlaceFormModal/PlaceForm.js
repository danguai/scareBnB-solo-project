import React from "react";

import { useState } from 'react';
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

import { createPlace, updatePlace, deletePlace, setPlaceToEditValue } from '../../store/places';

import './PlaceForm.css';

const PlaceForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    // const [address, setAddress] = useState('');
    // const [city, setCity] = useState('');
    // const [state, setState] = useState('');
    // const [country, setCountry] = useState('');
    // const [zipcode, setZipcode] = useState('');
    // const [price, setPrice] = useState(0);
    // const [rating, setRating] = useState(0);
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

    let placeToEdit = useSelector(state => state.places.placeToEdit);

    console.log('THIS IS THE PLACE TO EDIT', placeToEdit);

    const isEditMode = Boolean(placeToEdit?.id);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEditMode) {
                const place = await dispatch(updatePlace(placeToEdit));
                history.push(`/places/${place.id}`);

            } else {
                const place = await dispatch(createPlace(placeToEdit));
                // console.log('PLACE', place);
                history.push(`/places/${place.id}`);

            }
        } catch (error) {
            console.error(error);
        }
    };

    if (!placeToEdit) {
        placeToEdit = {
            address: '',
            city: '',
            state: '',
            country: '',
            zipcode: '',
            price: '',
            rating: '',
        };
    }


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
                                value={placeToEdit.address}
                                onChange={(e) => dispatch(setPlaceToEditValue({ address: e.target.value }))}
                                onBlur={() => {
                                    const error = validateAddress(placeToEdit.address)
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
                                value={placeToEdit.city}
                                onChange={(e) => dispatch(setPlaceToEditValue({ city: e.target.value }))}
                                onBlur={() => {
                                    const error = validateCity(placeToEdit.city)
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
                                value={placeToEdit.state}
                                onChange={(e) => dispatch(setPlaceToEditValue({ state: e.target.value }))}
                                onBlur={() => {
                                    const error = validateState(placeToEdit.state)
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
                                value={placeToEdit.country}
                                onChange={(e) => dispatch(setPlaceToEditValue({ country: e.target.value }))}
                                onBlur={() => {
                                    const error = validateCountry(placeToEdit.country)
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
                                value={placeToEdit.zipcode}
                                onChange={(e) => dispatch(setPlaceToEditValue({ zipcode: e.target.value }))}
                                onBlur={() => {
                                    const error = validateZipcode(placeToEdit.zipcode)
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
                                value={placeToEdit.price}
                                onChange={(e) => dispatch(setPlaceToEditValue({ price: e.target.value }))}
                                onBlur={() => {
                                    const error = validatePrice(placeToEdit.price)
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
                                value={placeToEdit.rating}
                                onChange={(e) => dispatch(setPlaceToEditValue({ rating: e.target.value }))}
                                onBlur={() => {
                                    const error = validateRating(placeToEdit.rating)
                                    if (error) setRatingError(error)
                                }}
                                onFocus={() => { setRatingError('') }}
                                required
                            />
                        </label>
                        {ratingError && <div className="errors_style">{ratingError}</div>}
                    </div>
                    {!isEditMode &&
                        <button
                            className={checkingErrors ? 'places__button__disabled' : 'places__button'}
                            disabled={checkingErrors}
                            type="submit"
                        >Create Haunted Place
                        </button>
                    }
                    {isEditMode &&
                        <button
                            className={checkingErrors ? 'places__button__disabled' : 'places__button'}
                            disabled={checkingErrors}
                            type="submit"
                        >Edit Haunted Place
                        </button>
                    }
                    {/* {isEditMode &&

                        <button
                            className='places__cancel__button'
                            onClick={e => {
                                e.preventDefault();
                                dispatch(deletePlace(placeToEdit.id))
                            }}
                        >Delete Haunted Place
                        </button>
                    } */}
                </div>
            </form >
        </div >
    )
};

export default PlaceForm;
