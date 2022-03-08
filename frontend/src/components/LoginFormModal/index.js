import React from 'react';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

import { displayModalLogin } from '../../store/session';

const LoginFormModal = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClick = e => {
            dispatch(displayModalLogin());
        };

        document.querySelector('#modal__background').addEventListener('click', handleClick);

    }, []);

    return (
        <>
            <Modal onClose={() => dispatch(displayModalLogin())}>
                <LoginForm />
            </Modal>
        </>
    );
}

export default LoginFormModal;
