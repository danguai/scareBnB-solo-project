import React from 'react';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm'

import { displayModalPlaceForm } from '../../store/places';

const ReviewFormModal = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClick = e => {
            dispatch(displayModalReviewForm());
        };

        document.querySelector('#modal__background').addEventListener('click', handleClick);

    }, []);

    return (
        <>
            <Modal onClose={() => dispatch(displayModalReviewForm())}>
                <ReviewForm />
            </Modal>
        </>
    );
}

export default ReviewFormModal;
