import React from 'react';
import Register from './Register'
import Login from './Login'

const Start = () => {
    return (
        <div className="start">
            <div className="start__banner">
                Pozostań anonimowy i wyraź swoje opinie
            </div>
            <hr />
            <Register />
        </div>
    );
}

export default Start;