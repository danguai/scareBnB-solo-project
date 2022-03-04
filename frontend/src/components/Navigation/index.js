import React from "react";
import { NavLink } from "react-router-dom";
import ProfileButton from "../ProfileButton";

import './Navigation.css';

const Navigation = ({ isLoaded, sessionUser }) => {
    return (
        <div>
            <div className="navigation__bar">
                <ul className="navigation__bar">
                    <li>
                        <NavLink className="temp__solution" to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="temp__solution" to='/'>Places To Stay</NavLink>
                    </li>
                    <li>
                        <NavLink className="temp__solution" to='/'>Haunting experiences</NavLink>
                    </li>
                    <li>
                        <NavLink className="temp__solution" to='/'>Become a Ghost</NavLink>
                    </li>
                    <li>
                        {isLoaded && <ProfileButton user={sessionUser} />}
                    </li>

                </ul>
            </div>
        </div>
    )
};

export default Navigation;
