import React from 'react';

import './Splashpage.css';

const Splashpage = () => {

    return (
        <div>
            <div className='splashpage__image__container'>
                <img className='splash__temp__image' src={require('../../images/HauntedHouse.png')} />
            </div>
        </div>
    )
};
export default Splashpage;
