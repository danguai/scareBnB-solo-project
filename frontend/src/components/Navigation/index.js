import React from "react";
import { NavLink } from "react-router-dom";
import ProfileButton from "../ProfileButton";

import './Navigation.css';

const Navigation = ({ isLoaded, sessionUser }) => {

    return (
        <div>
            <div>
                <nav className="navigation__bar">
                    <a href='/'>
                        <img className='scareBnB__Logo' src={require('../../images/LOGO.png')} />
                    </a>
                    <div className="reviews__link" >
                        <a>
                            <NavLink className="temp__solution" to='/'>Haunting experiences</NavLink>
                        </a>
                    </div>
                    <a>
                        <NavLink className="temp__solution" to='/'>Become a Ghost</NavLink>
                    </a>
                    <a>
                        {isLoaded && <ProfileButton user={sessionUser} />}
                    </a>
                </nav>
            </div>
        </div>
    )
};

export default Navigation;
