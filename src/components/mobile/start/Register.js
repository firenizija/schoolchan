import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [school, setSchool] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const data = { userName, school, email, password };

    const handleSubmit = e => {

        fetch('http://192.168.8.30:5000/singup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        e.preventDefault();
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userName"
                    placeholder="Pseudonim"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <input
                    type="text"
                    name="school"
                    placeholder="Wybierz szkołe"
                    value={school}
                    onChange={e => setSchool(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Hasło"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button>Zarejestruj się</button>
            </form>
        </div>
    );
}

export default Register;