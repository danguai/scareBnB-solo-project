import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import * as sessionActions from '../../store/session';

import './SignUpForm.css';

const SignupFormPage = ({ user }) => {
    const dispatch = useDispatch();
    // const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to='/' />;

    const handleSubmit = e => {
        e.preventDefault();

        if (password === confirmPassword) {
            setErrors([]);

            return dispatch(sessionActions.signUp({ firstName, lastName, username, email, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password should match Password']);
    };
    return (
        <div className='signup__form__container'>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className='signup__box'>
                    <div className='signup__title'>
                        Sign Up
                    </div>
                    <div className='signup__welcome'>
                        Welcome to Scarebnb
                    </div>
                    <div className='user__pass__box'>
                        <label className='signup__label'>
                            First Name
                            <input
                                className='input__signup__box'
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </label>
                        <label className='signup__label'>
                            Last Name
                            <input
                                className='input__signup__box'
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </label>
                        <label className='signup__label'>
                            Username
                            <input
                                className='input__signup__box'
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </label>
                        <label className='signup__label'>
                            Email
                            <input
                                className='input__signup__box'
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label className='signup__label'>
                            Password
                            <input
                                className='input__signup__box'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <label className='signup__label'>
                            Confirm Password
                            <input
                                className='input__signup__box'
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button className='signup__button' type="submit">Sign Up</button>
                </div>
            </form >
        </div >
    )
};

export default SignupFormPage;
