import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { validateLoginUsername, validateLoginPassword, validatePassword } from '../../utils/validation';

import * as sessionActions from '../../store/session';

import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [credential, setCredential] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const [credentialError, setCredentialError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const checkingErrors = (credentialError || usernameError || emailError || passwordError);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors([]);
        try {

            await dispatch(sessionActions.login({ credential, password }));
            history.push('/');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className='login__form__container' style={{ 'borderRadius': '20px' }}>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className='login__box'>
                    <div className='login__title'>
                        Login
                    </div>
                    <div className='login__welcome'>
                        Welcome back to Scarebnb
                    </div>
                    <div className='user__pass__box'>
                        <label className='login__label'>
                            Username or Email
                            <input
                                className='input__login__box'
                                type="text"
                                value={credential}
                                onChange={(e) => setCredential(e.target.value)}
                                onBlur={() => {
                                    const error = validateLoginUsername(username, email)
                                    if (error) setCredential(error)
                                }}
                                onFocus={() => { setCredentialError('') }}
                                required
                            />
                        </label>
                        {usernameError && <div className="errors__style">{usernameError}</div>}
                        <label className='login__label'>
                            Password
                            <input
                                className='input__login__box'
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
                    </div>
                    <button className={checkingErrors ? 'login__button__disabled' : 'login__button'}
                        disabled={checkingErrors}
                        type="submit">Log In</button>
                </div>
            </form >
        </div >
    );
}

export default LoginForm;
