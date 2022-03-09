import React from 'react';

import { useSelector } from 'react-redux';

import LoginForm from '../LoginFormModal/';
import SignupForm from '../SignUpModal/';

import PlaceForm from '../PlaceFormModal/';

import './Splashpage.css';

const Splashpage = () => {

    const shouldDisplayLogin = useSelector(state => state.session.shouldDisplayLogin);

    const shouldDisplaySignup = useSelector(state => state.session.shouldDisplaySignup);

    const shouldDisplayPlaceForm = useSelector(state => state.places.shouldDisplayPlaceForm);


    return (
        <div>
            <div className='search__bar__container'>
                <div className='search__bar__options'>
                    <div>
                        Location
                    </div>
                    <div>
                        Start Date
                    </div>
                    <div>
                        End Date
                    </div>
                    <div>
                        Ghosts
                    </div>
                </div>
            </div>
            <div className='splashpage__image__container'>
                <div className='tagline__splashpage'>
                    Let curiosity do the haunting
                </div>
                <div>
                    <img className='splash__temp__image' src={require('../../images/HauntedHouse.png')} />
                </div>
            </div>
            {shouldDisplaySignup && <SignupForm />}
            {shouldDisplayLogin && <LoginForm />}
            {shouldDisplayPlaceForm && <PlaceForm />}
        </div>
    )
};
export default Splashpage;
