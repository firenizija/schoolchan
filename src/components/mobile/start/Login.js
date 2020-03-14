import React, { useState } from 'react';

import './style/login.scss'
import arrow from './svg/arrow.svg'

const Login = ({ switchFormState }) => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const data = { username, password }
    const handleSubmit = (e) => {
        fetch('http://192.168.8.30:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data.token);
                if (data.message) {
                    console.log("Złe dane");
                } else {
                    localStorage.setItem("token", data.token)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        e.preventDefault();
    }
    return (
        <div className="login">
            <h1 className="login__title">
                Logowanie
            </h1>
            <form className="login__form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Pseudonim"
                    className="login__input"
                    value={username}
                    onChange={e => setusername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Hasło"
                    className="login__input"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div className="login__underInputs">
                    <button className="login__forgotPassword">
                        Zapomniałeś hasła?
                    </button>
                    <label className="login__remember">
                        <input
                            type="checkbox"
                            name="remember"
                            className="login__rememberCheckbox"
                        />
                        Pamiętaj mnie
                    </label>
                </div>
                <button className="login__loginButton">
                    Zaloguj się <img src={arrow} alt="" />
                </button>
                <button className="login__registerButton" onClick={() => switchFormState('register')}>Stwórz nowe konto</button>
            </form>
        </div >
    );
}

export default Login;