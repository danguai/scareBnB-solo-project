import React from 'react';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import PlaceForm from './PlaceForm';

import { displayModalPlaceForm } from '../../store/places';

const PlaceFormModal = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClick = e => {
            dispatch(displayModalPlaceForm());
        };

        document.querySelector('#modal__background').addEventListener('click', handleClick);

    }, []);

    return (
        <>
            <Modal onClose={() => dispatch(displayModalPlaceForm())}>
                <PlaceForm />
            </Modal>
        </>
    );
}

export default PlaceFormModal;
