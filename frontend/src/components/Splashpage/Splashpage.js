import React from 'react';
import { Link } from 'react-router-dom'


const Splashpage = () => {

    return (
        <div className='splash__temp__image'>
            <Link to='/'>
                <img src={require('../../images/HauntedHouse.png')} />
            </Link>
        </div>
    )
}

export default Splashpage;
