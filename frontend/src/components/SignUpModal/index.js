import React from 'react';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import SignupForm from './SignUpForm';

import { displayModalSignup } from '../../store/session';

const SignUpFormModal = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClick = e => {
            dispatch(displayModalSignup());
        };

        document.querySelector('#modal__background').addEventListener('click', handleClick);

    }, []);

    return (
        <>
            <Modal onClose={() => dispatch(displayModalSignup())}>
                <SignupForm />
            </Modal>
        </>
    );
}

export default SignUpFormModal;
