import React from "react";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './PlacesPage.css';

const PlacesPage = ({ places }) => {

    return (
        <div id="places">
            <div className="places__container">
                <h1>Title</h1>
                <div>
                    <ul className="info__place">
                        <li>Ranking</li>
                        <li>Reviews</li>
                        <li>Location</li>
                        <li>Share</li>
                        <li>Favorite</li>
                    </ul>
                </div>
            </div>
            <div className='place__photos'>
                <div>
                    <img className='place__photo__01' src={require('../../images/HauntedHouse.png')} />
                </div>
                <div>
                    <img className='place__photo__02' src={require('../../images/HauntedHouse.png')} />
                </div>
                <div>
                    <img className='place__photo__03' src={require('../../images/HauntedHouse.png')} />
                </div>
                <div>
                    <img className='place__photo__04' src={require('../../images/HauntedHouse.png')} />
                </div>
                <div>
                    <img className='place__photo__05' src={require('../../images/HauntedHouse.png')} />
                </div>


            </div >
        </div >
    )
};

export default PlacesPage;
