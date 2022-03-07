import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import SignupForm from './SignUpForm';

import { displayModal } from '../../store/session';

const SignUpFormModal = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Modal onClose={() => dispatch(displayModal())}>
                <SignupForm />
            </Modal>
        </>
    );
}

export default SignUpFormModal;
