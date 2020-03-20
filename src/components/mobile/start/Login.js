import React, { useState } from 'react';

import './style/login.scss'
import arrow from './svg/arrow.svg'

const Login = ({ switchFormState }) => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const errorController = (status) => {
        if (status === 400) {
            setError("Wpisz dane logowania");
        } else if (status === 401) {
            setError("Wpisane login lub hasło są nieprawidłowe");
        } else if (status === 404 || status === 403) {
            setError("Serwery aktualnie są niedostępne. Proszę spróbować ponownie później.");
        } else if (status === 200) {
            window.location.pathname = "/chan"
        }
    }

    const data = { username, password }
    const handleSubmit = (e) => {
        fetch('http://192.168.8.30:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => { errorController(res.status); return (res.json()) })
            .then((data) => {
                console.log('Success:', data);
                if (data.message) {
                    console.log("Złe dane");
                } else {
                    localStorage.setItem("token", data.token)
                }
            })
            .catch((error) => {
                if (error == "TypeError: Failed to fetch") errorController(404)
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
                <span className="login__error">{error}</span>
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