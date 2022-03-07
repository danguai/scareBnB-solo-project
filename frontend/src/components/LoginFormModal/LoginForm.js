import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { validateCredentials, validatePassword } from '../../utils/validation';

import * as sessionActions from '../../store/session';

import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch();

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();

        setErrors([]);

        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };
    return (
        <div className='login__form__container'>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, id) => <li key={id}>{error}</li>)}
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
                                required
                            />
                        </label>
                        <label className='login__label'>
                            Password
                            <input
                                className='input__login__box'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button className='login__button' type="submit">Log In</button>
                </div>
            </form >
        </div >
    );
}

export default LoginForm;
