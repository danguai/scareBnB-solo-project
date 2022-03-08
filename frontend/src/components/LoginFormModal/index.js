import React from 'react';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

import { displayModal } from '../../store/session';

const LoginFormModal = () => {
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
                <LoginForm />
            </Modal>
        </>
    );
}

export default LoginFormModal;
