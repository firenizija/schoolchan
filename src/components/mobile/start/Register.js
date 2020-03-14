import React, { useState, useEffect } from 'react';

import './style/register.scss'
import arrow from './svg/arrow.svg'

const Register = ({ switchFormState }) => {
    const [username, setUsername] = useState('');
    const [school, setSchool] = useState('');
    const [repassword, setRepassword] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errorName, setErrorName] = useState('');

    const errorController = (name) => {
        if (name === "MissingUsernameError") {
            setError("Podaj nazwę uzytkownika");
            setErrorName("username");
        }
        else if (name === "MissingPasswordError") {
            setError("Wpisz hasło");
            setErrorName("password");
        }
    }

    const data = { username, school, repassword, password };

    const handleSubmit = e => {
        fetch('http://192.168.8.30:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response:', data);
                errorController(data.name);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        e.preventDefault();
    }


    return (
        <div className="register">
            <div>
                <h1 className="register__title">
                    Stwórz nowe konto
            </h1>
                <h2 className="register__text">
                    Trzymaj kontakt anonimowo ze społecznością swojej szkoły.
            </h2>
            </div>
            <form className="register__form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Pseudonim"
                    className="register__input"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                {errorName === 'username' ? error : null}
                <select
                    name="school"
                    placeholder="Wybierz szkołe"
                    className="register__input"
                    value={school}
                    onChange={e => setSchool(e.target.value)}
                >
                    <option value hidden>Wybierz szkołe</option>
                    <option value="kilińskiego">kilińskiego</option>
                </select>
                {errorName === 'school' ? error : null}
                <input
                    type="password"
                    name="password"
                    placeholder="Hasło"
                    className="register__input"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {errorName === 'password' ? error : null}
                <input
                    type="password"
                    name="repassword"
                    placeholder="Powtórz hasło"
                    className="register__input"
                    value={repassword}
                    onChange={e => setRepassword(e.target.value)}
                />
                {errorName === 'email' ? error : null}
                <div className="register__buttons">
                    <button
                        type="button"
                        className="register__loginButton"
                        onClick={() => switchFormState('login')}
                    >
                        <p className="register__loginText">
                            Masz już konto?
                    </p>
                        <p className="register__loginTextBlue">
                            Zaloguj się
                        </p>
                    </button>
                    <button className="register__registerButton">
                        Zarejestruj się <img src={arrow} alt="" />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;