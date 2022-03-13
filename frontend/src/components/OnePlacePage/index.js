import React from "react";

import { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import LoginForm from '../LoginFormModal';
import SignupForm from '../SignUpModal';
import PlaceForm from "../PlaceFormModal";
import ReviewsList from "../ReviewsList";

import { getPlace, deletePlace } from '../../store/places';

import { displayModalPlaceForm } from "../../store/places";
import { displayModalReviewForm } from "../../store/reviews";

import './OnePlacePage.css';

const OnePlacePage = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const history = useHistory();

    const place = useSelector(state => state.places.place);

    let reviewToEdit = useSelector(state => state.reviews.reviewToEdit);

    const sessionUser = useSelector(state => state.session.user);


    useEffect(() => {
        dispatch(getPlace(id));
    }, [dispatch]);

    const shouldDisplayLogin = useSelector(state => state.session.shouldDisplayLogin);
    const shouldDisplaySignup = useSelector(state => state.session.shouldDisplaySignup);
    const shouldDisplayPlaceForm = useSelector(state => state.places.shouldDisplayPlaceForm);
    // const shouldDisplayReviewForm = useSelector(state => state.reviews.shouldDisplayReviewForm);

    if (!place) return null;

    const isPlaceOwner = place.userId === sessionUser?.id;

    const canCreateReview = sessionUser && !isPlaceOwner;

    return (
        <div id="places">
            <div className="places__and__reviews">
                <div className="places__container">
                    <div className="title__bar">
                        <h1>{place.title}</h1>
                        <div className="buttons__bar">
                            {isPlaceOwner && <button
                                className='user__button logged__in__button'
                                onClick={() => dispatch(displayModalPlaceForm(place))}
                            >Edit Place
                            </button>}
                            {isPlaceOwner && <button
                                className='user__button logged__in__button'
                                onClick={() => {
                                    dispatch(deletePlace(place.id))
                                    history.push(`/`);
                                }}
                            >Delete Place
                            </button>}
                        </div>
                    </div>
                    <div>
                        <div className="info__place">
                            <div className="main__address">{place.address}</div>
                            <div className="address_all_elemenets">
                                <div className="address__element">{place.city}</div>
                                <div className="address__element">{place.state}</div>
                                <div className="address__element">{place.country}</div>
                                <div className="address__zipcode">{place.zipcode}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='place__photos__container'>
                    {place.url_image_01 ?
                        <img className='place__photo__01' src={place.url_image_01}
                        /> :
                        <img className='place__photo__01' src={require('../../images/HauntedHouse_Template.png')}
                        />
                    }
                    {place.url_image_02 ?
                        <img className='place__photo__02' src={place.url_image_02}
                        /> :
                        <img className='place__photo__02' src={require('../../images/HauntedHouse_Template.png')}
                        />
                    }
                    {place.url_image_03 ?
                        <img className='place__photo__03' src={place.url_image_03}
                        /> :
                        <img className='place__photo__03' src={require('../../images/HauntedHouse_Template.png')}
                        />
                    }
                    {place.url_image_04 ?
                        <img className='place__photo__04' src={place.url_image_04}
                        /> :
                        <img className='place__photo__04' src={require('../../images/HauntedHouse_Template.png')}
                        />
                    }
                    {place.url_image_05 ?
                        <img className='place__photo__05' src={place.url_image_05}
                        /> :
                        <img className='place__photo__05' src={require('../../images/HauntedHouse_Template.png')}
                        />
                    }
                </div>
                <div className="description__reservation">
                    <div className="place__description">
                        <h3>What you are getting</h3>
                        <ul className="disamenities">
                            <li>{place.amenities_01}</li>
                            <li>{place.amenities_02}</li>
                            <li>{place.amenities_03}</li>
                            <li>{place.amenities_04}</li>
                        </ul>
                    </div>
                </div>
                <div className="reviews__container">
                    {canCreateReview && <button
                        className='reviews__button__create'
                        onClick={() => dispatch(displayModalReviewForm(reviewToEdit))}
                        type="submit"
                    >Create Review
                    </button>}
                    {<ReviewsList />}
                </div>
            </div>
            {shouldDisplaySignup && <SignupForm />}
            {shouldDisplayLogin && <LoginForm />}
            {shouldDisplayPlaceForm && <PlaceForm />}
        </div >
    )
};

export default OnePlacePage;
