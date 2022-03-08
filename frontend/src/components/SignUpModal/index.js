import React from 'react';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import SignupForm from './SignUpForm';

import { displayModal } from '../../store/session';

const SignUpFormModal = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClick = e => {
            dispatch(displayModal());
        };

        document.querySelector('#modal__background').addEventListener('click', handleClick);

        return () => document.querySelector('#modal__background').removeEventListener('click', handleClick);
    }, []);

    return (
        <>
            <Modal onClose={() => dispatch(displayModal())}>
                <SignupForm />
            </Modal>
        </>
    );
}

export default SignUpFormModal;
