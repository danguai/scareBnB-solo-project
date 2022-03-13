import React from "react";
import { Link } from "react-router-dom";
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
                        <Link className="temp__solution" to='/places'>Find a Haunting experience</Link>

                        <Link className="temp__solution" to='/'>Become a Ghost</Link>
                    </div>
                    <div>
                        {isLoaded && <ProfileButton user={sessionUser} />}
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default Navigation;
