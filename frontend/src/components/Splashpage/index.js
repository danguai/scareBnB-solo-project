import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

import LoginForm from '../LoginFormModal/';
import SignupForm from '../SignUpModal/';

import './Splashpage.css';

const Splashpage = () => {

    const shouldDisplay = useSelector(state => console.log('YESYESYESYS', state) || state.session.displayModal);

    return (
        <div>
            <div className='reviews__container'>
                <li>
                    <NavLink className="temp__solution" to='/'>Places To Stay</NavLink>
                </li>
                <li>
                    <NavLink className="temp__solution" to='/'>Haunting experiences</NavLink>
                </li>
            </div>
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
                        Guests
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
            {shouldDisplay && <SignupForm />}
            {/* {shouldDisplay && <LoginForm />} */}
        </div>
    )
};
export default Splashpage;
