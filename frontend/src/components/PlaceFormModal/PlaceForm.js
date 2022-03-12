import React from "react";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



import {
    validateTitle,
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

    const [errors, setErrors] = useState([]);

    // ERRORS
    const [titleError, setTitleError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [cityError, setCityError] = useState('');
    const [stateError, setStateError] = useState('');
    const [countryError, setCountryError] = useState('');
    const [zipcodeError, setZipcodeError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [ratingError, setRatingError] = useState('');

    const checkingErrors = (
        titleError ||
        addressError ||
        cityError ||
        stateError ||
        countryError ||
        zipcodeError ||
        priceError ||
        ratingError
    );

    let placeToEdit = useSelector(state => state.places.placeToEdit);

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
            title: '',
            address: '',
            city: '',
            state: '',
            country: '',
            zipcode: '',
            url_image_01: '',
            url_image_02: '',
            url_image_03: '',
            url_image_04: '',
            url_image_05: '',
            amenities_01: '',
            amenities_02: '',
            amenities_03: '',
            amenities_04: '',
            amenities_05: '',
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
                            Title
                            <input
                                className='input__places__box'
                                type="text"
                                value={placeToEdit.title}
                                onChange={(e) => dispatch(setPlaceToEditValue({ title: e.target.value }))}
                                onBlur={() => {
                                    const error = validateTitle(placeToEdit.title)
                                    if (error) setTitleError(error)
                                }}
                                onFocus={() => { setTitleError('') }}
                                required
                            />
                        </label>
                        {titleError && <div className="errors_style">{titleError}</div>}
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
                        <div className="city__state__country__zipcode">
                            <label className='places__label'>
                                City
                                <input
                                    className='input__places__one__liner'
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
                            <label className='places__label'>
                                State
                                <input
                                    className='input__places__one__liner'
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
                            <label className='places__label'>
                                Country
                                <input
                                    className='input__places__one__liner'
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
                            <label className='places__label'>
                                Zipcode
                                <input
                                    className='input__places__one__liner'
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
                        </div>
                        {cityError && <div className="errors_style">{cityError}</div>}
                        {stateError && <div className="errors_style">{stateError}</div>}
                        {countryError && <div className="errors_style">{countryError}</div>}
                        {zipcodeError && <div className="errors_style">{zipcodeError}</div>}
                        <label className='places__label'>
                            Image 1
                            <input
                                className='input__places__box'
                                type="url"
                                value={placeToEdit.url_image_01}
                                onChange={(e) => dispatch(setPlaceToEditValue({ url_image_01: e.target.value }))}
                            />
                        </label>
                        {placeToEdit.url_image_01 && <label className='places__label'>
                            Image 2
                            <input
                                className='input__places__box'
                                type="url"
                                value={placeToEdit.url_image_02}
                                onChange={(e) => dispatch(setPlaceToEditValue({ url_image_02: e.target.value }))}
                            />
                        </label>}
                        {placeToEdit.url_image_02 && <label className='places__label'>
                            Image 3
                            <input
                                className='input__places__box'
                                type="url"
                                value={placeToEdit.url_image_03}
                                onChange={(e) => dispatch(setPlaceToEditValue({ url_image_03: e.target.value }))}
                            />
                        </label>}
                        {placeToEdit.url_image_03 && <label className='places__label'>
                            Image 4
                            <input
                                className='input__places__box'
                                type="url"
                                value={placeToEdit.url_image_04}
                                onChange={(e) => dispatch(setPlaceToEditValue({ url_image_04: e.target.value }))}
                            />
                        </label>}
                        {placeToEdit.url_image_04 && <label className='places__label'>
                            Image 5
                            <input
                                className='input__places__box'
                                type="url"
                                value={placeToEdit.url_image_05}
                                onChange={(e) => dispatch(setPlaceToEditValue({ url_image_05: e.target.value }))}
                            />
                        </label>}
                        <div className="city__state__country__zipcode">
                            <label className='places__label'>
                                Amenities 1
                                <input
                                    className='input__places__one__liner'
                                    type="text"
                                    value={placeToEdit.amenities_01}
                                    onChange={(e) => dispatch(setPlaceToEditValue({ amenities_01: e.target.value }))}
                                />
                            </label>
                            <label className='places__label'>
                                Amenities 2
                                <input
                                    className='input__places__one__liner'
                                    type="text"
                                    value={placeToEdit.amenities_02}
                                    onChange={(e) => dispatch(setPlaceToEditValue({ amenities_02: e.target.value }))}
                                />
                            </label>
                            <label className='places__label'>
                                Amenities 3
                                <input
                                    className='input__places__one__liner'
                                    type="text"
                                    value={placeToEdit.amenities_03}
                                    onChange={(e) => dispatch(setPlaceToEditValue({ amenities_03: e.target.value }))}
                                />
                            </label>
                            <label className='places__label'>
                                Amenities 4
                                <input
                                    className='input__places__one__liner'
                                    type="text"
                                    value={placeToEdit.amenities_04}
                                    onChange={(e) => dispatch(setPlaceToEditValue({ amenities_04: e.target.value }))}
                                />
                            </label>
                        </div>
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
