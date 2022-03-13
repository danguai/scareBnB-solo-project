import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
// import * as sessionActions from '../../store/session';

import { logOut, displayModalLogin, displayModalSignup, login } from "../../store/session";
import { displayModalPlaceForm } from "../../store/places";

import './ProfileButton.css';

const ProfileButton = ({ user }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [showMenu, setShowMenu] = useState(false);

    const sessionUser = useSelector(state => state.session.user);

    const logout = (e) => {
        e.preventDefault();
        dispatch(logOut());
        history.push('/');
    };

    const handleDemoUserOnClick = async () => {
        await dispatch(login({
            username: 'freddy',
            password: 'password'
        }));
        history.push('/places');
    };

    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
            <>
                <li className='dropdown__menu__element'>
                    <button
                        className='user__button'
                    >Profile</button>
                </li>
                <li className='dropdown__menu__element'>
                    <button
                        className='user__button'
                    >Your Places</button>
                </li>
                <li className='dropdown__menu__element'>
                    <button
                        className='user__button'
                        onClick={() => dispatch(displayModalPlaceForm())}
                    >New Place
                    </button>
                </li>
                <li className='dropdown__menu__element'>
                    <button
                        className='user__button'
                        onClick={logout}
                    >Log Out
                    </button>
                </li>

            </>
        );
    } else {
        sessionLinks = (
            <>
                <li className='dropdown__menu__element'>
                    <button
                        className='user__button'
                        onClick={() => dispatch(displayModalLogin())}
                    >Log In
                    </button>
                </li>
                <li className='dropdown__menu__element'>
                    <button
                        className='user__button'
                        onClick={() => dispatch(displayModalSignup())}
                    >Sign Up
                    </button>
                </li>
                <li className='dropdown__menu__element'>
                    <button
                        className='user__button'
                        onClick={handleDemoUserOnClick}
                    >Demo User
                    </button>
                </li>
            </>
        );
    }

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => setShowMenu(false);

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);

    }, [showMenu]);

    console.log('IMAGE ', sessionUser);

    return (
        <>
            <div className="user__menu__box">
                {!sessionUser ?
                    <img className='photo__user' src={require('../../images/no-image-user.jpg')}
                    /> :
                    <img className='photo__user' src={sessionUser.imageProfile}
                    />}
                {sessionUser ? <button
                    className="user__menu__button"
                    onClick={openMenu}
                >{sessionUser.username}
                </button> :
                    <button
                        className="user__menu__button"
                        onClick={openMenu}
                    >User
                    </button>}
                <div>
                    {showMenu && (
                        <ul className='dropdown__menu__options'>
                            {sessionLinks}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}


export default ProfileButton;
