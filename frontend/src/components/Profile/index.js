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

import './Profile.css';

const Profile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.profile.user);


    console.log('U S E R', user);
    // useEffect(() => {
    //     dispatch(getPlace(id));
    // }, [dispatch]);

    const shouldDisplayLogin = useSelector(state => state.session.shouldDisplayLogin);
    const shouldDisplaySignup = useSelector(state => state.session.shouldDisplaySignup);
    const shouldDisplayPlaceForm = useSelector(state => state.places.shouldDisplayPlaceForm);
    // const shouldDisplayReviewForm = useSelector(state => state.reviews.shouldDisplayReviewForm);

    return (
        <div>
            <div id="profile">
                <div className="profile__container">
                    <div>
                        {/* <img className='profile__photo' src={sessionUser.imageProfile} /> */}
                    </div>
                    <div className="profile__info">

                        <div>
                            {/* First Name: {sessionUser.firstName} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;
