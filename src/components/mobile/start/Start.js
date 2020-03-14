import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';

import './style/start.scss'

const Start = () => {
    const [formState, switchFormState] = useState('register');

    return (
        <div className="start">
            <div className="start__bannerText">
                Pozostań anonimowy i wyraź swoje opinie
            </div>
            <hr className="start__hr" />
            {formState === 'login' ? <Login switchFormState={switchFormState} /> : <Register switchFormState={switchFormState} />}
        </div>
    );
}

export default Start;