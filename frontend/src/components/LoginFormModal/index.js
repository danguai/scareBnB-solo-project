import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

import { displayModal } from '../../store/session';

const LoginFormModal = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Modal onClose={() => dispatch(displayModal())}>
                <LoginForm />
            </Modal>
        </>
    );
}

export default LoginFormModal;
