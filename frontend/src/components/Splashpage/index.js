import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

import LoginForm from '../LoginFormModal/';
import SignupForm from '../SignUpModal/';

import './Splashpage.css';

const Splashpage = () => {

    const shouldDisplay = useSelector(state => state.session.displayModal);

    return (
        <div>
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


// {/* Modals */ }
//         <ModalOne
//           closeFn={closeModal}
//           open={modalOpen === 'modal-one'} />

//         <ModalTwo
//           closeFn={closeModal}
//           open={modalOpen === 'modal-two'} />

//         <ModalThree
//           closeFn={closeModal}
//           open={modalOpen === 'modal-three'} />
