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

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <div className='search__bar__container'>
                <div>
                    {/* <form
                        className='search__bar__options'
                        onSubmit={handleSubmit}
                    >
                        <label className='location__label'>
                            Location
                        </label>
                        <label className='location__label'>
                            Start Date
                            <input
                                className='input__date__box'
                                type="date"
                                required
                            />
                        </label>
                        <label className='location__label'>
                            End Date
                            <input
                                className='input__date__box'
                                type="date"
                                required
                            />
                        </label>
                        <label className='location__label'>
                            Ghosts
                            <input
                                className='input__ghosts__box'
                                type="number"
                                required
                            />
                        </label>
                    </form> */}
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
