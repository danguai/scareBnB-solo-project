import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    // const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/' />
    );

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
        <div className='form__container'>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className='login__box'>
                    <div>
                        Welcome back to Scarebnb
                    </div>
                    <div className='user__pass__box'>
                        <label className='login__elements'>
                            Username or Email
                            <input
                                className='input__login__box'
                                type="text"
                                value={credential}
                                onChange={(e) => setCredential(e.target.value)}
                                required
                            />
                        </label>
                        <label className='login__elements'>
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

export default LoginFormPage;
