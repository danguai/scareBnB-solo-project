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
                <li>
                    <NavLink to="/">{sessionUser.username}</NavLink>
                </li>
                <li>
                    <NavLink to="/">Notifications</NavLink>
                </li>
                <li>
                    <NavLink to="/">Trips</NavLink>
                </li>
                <li>
                    <button onClick={logout}>Log Out</button>
                </li>
            </>
        );
    } else {
        sessionLinks = (
            <>
                <li>
                    <NavLink to="/login">Log In</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Demo User</NavLink>
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
            <div className="dropdown__menu__box">
                <button onClick={openMenu}> User
                    <i className="fas fa-user-circle" />
                </button>
                {showMenu && (
                    <ul>
                        {sessionLinks}
                    </ul>
                )}
            </div>
        </>
    );
}


export default ProfileButton;
