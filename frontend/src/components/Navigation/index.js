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
                        <Link className="temp__solution" to='/'>Haunting experiences</Link>

                        <Link className="temp__solution" to='/'>Become a Ghost</Link>
                    </div>
                    <a>
                        {isLoaded && <ProfileButton user={sessionUser} />}
                    </a>
                </nav>
            </div>
        </div>
    )
};

export default Navigation;
