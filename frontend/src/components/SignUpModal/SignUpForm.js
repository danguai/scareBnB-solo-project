import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { validateFirstName, validateLastName, validateUsername, validateEmail, validatePassword, validateConfirmPassword } from '../../utils/validation';

import * as sessionActions from '../../store/session';

import './SignUpForm.css';

const SignupForm = ({ user }) => {
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

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const checkingErrors = (firstNameError || lastNameError || usernameError || emailError || passwordError || confirmPasswordError);

    if (sessionUser) return <Redirect to='/' />;

    const handleSubmit = e => {
        e.preventDefault();

        if (password === confirmPassword) {
            setErrors([]);

            return dispatch(sessionActions.signUp({ firstName, lastName, username, email, password }))
                .catch(async (data) => {
                    setErrors(data.errors);
                    // const data = await res.json();
                    // if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password should match Password']);
    };
    return (
        <div className='signup__form__container'>
            <form onSubmit={handleSubmit}>
                <ul className="errors">
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
                                onBlur={() => {
                                    const error = validateFirstName(firstName)
                                    if (error) setFirstNameError(error)
                                }}
                                onFocus={() => { setFirstNameError('') }}
                                required
                            />
                        </label>
                        {firstNameError && <div className="errors_style">{firstNameError}</div>}
                        <label className='signup__label'>
                            Last Name
                            <input
                                className='input__signup__box'
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                onBlur={() => {
                                    const error = validateLastName(lastName)
                                    if (error) setLastNameError(error)
                                }}
                                onFocus={() => { setLastNameError('') }}
                                required
                            />
                        </label>
                        {lastNameError && <p className="errors_style">{lastNameError}</p>}
                        <label className='signup__label'>
                            Username
                            <input
                                className='input__signup__box'
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onBlur={() => {
                                    const error = validateUsername(username)
                                    if (error) setUsernameError(error)
                                }}
                                onFocus={() => { setUsernameError('') }}
                                required
                            />
                        </label>
                        {usernameError && <p className="errors_style">{usernameError}</p>}

                        <label className='signup__label'>
                            Email
                            <input
                                className='input__signup__box'
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => {
                                    const error = validateEmail(email)
                                    if (error) setEmailError(error)
                                }}
                                onFocus={() => { setEmailError('') }}
                                required
                            />
                        </label>
                        {emailError && <p className="errors_style">{emailError}</p>}
                        <label className='signup__label'>
                            Password
                            <input
                                className='input__signup__box'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() => {
                                    const error = validatePassword(password)
                                    if (error) setPasswordError(error)
                                }}
                                onFocus={() => { setPasswordError('') }}
                                required
                            />
                        </label>
                        {passwordError && <p className="errors_style">{passwordError}</p>}
                        <label className='signup__label'>
                            Confirm Password
                            <input
                                className='input__signup__box'
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onBlur={() => {
                                    const error = validateConfirmPassword(password, confirmPassword)
                                    if (error) setConfirmPasswordError(error)
                                }}
                                onFocus={() => { setConfirmPasswordError('') }}
                                required
                            />
                        </label>
                        {confirmPasswordError && <p className="errors_style">{confirmPasswordError}</p>}

                    </div>
                    <button className={checkingErrors ? 'signup__button__disabled' : 'signup__button'}
                        disabled={checkingErrors}
                        type="submit">Sign Up</button>
                </div>
            </form >
        </div >
    )
};

export default SignupForm;
