import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';

import './ProfileButton.css';

const ProfileButton = ({ user }) => {
    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(false);

    const sessionUser = useSelector(state => state.session.user);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logOut());
    };

    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
            <>
                <li className='dropdown__menu__element'>
                    <NavLink to="/">{sessionUser.username}</NavLink>
                </li>
                <li className='dropdown__menu__element'>
                    <NavLink to="/">Notifications</NavLink>
                </li>
                <li className='dropdown__menu__element'>
                    <NavLink to="/">Trips</NavLink>
                </li>
                <li className='dropdown__menu__element'>
                    <button onClick={logout}>Log Out</button>
                </li>

            </>
        );
    } else {
        sessionLinks = (
            <>
                <li className='dropdown__menu__element'>
                    <button onClick={() => dispatch(sessionActions.displayModal())}>Log In</button>
                </li>
                <li className='dropdown__menu__element'>
                    <button onClick={() => dispatch(sessionActions.displayModal())}>Sign Up</button>
                    {/* <NavLink to="/signup">Sign Up</NavLink> */}
                </li>
                <li className='dropdown__menu__element'>
                    <button to='/'>Demo User</button>
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


    return (
        <>
            <div className="user__menu__box">
                <button className="user__menu__button" onClick={openMenu}>
                    User
                </button>
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
