import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import SignUpFormPage from './SignupFormPage';

import { displayModal } from '../../store/session';

const SignUpFormModal = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Modal onClose={() => dispatch(displayModal())}>
                <SignUpForm />
            </Modal>
        </>
    );
}

export default SignUpFormModal;
