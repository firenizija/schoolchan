import React, { useState } from 'react';

const Register = () => {
    const [username, setusername] = useState('anonim');
    const [school, setSchool] = useState('xx');
    const [email, setEmail] = useState('xx@wp.pl');
    const [password, setPassword] = useState('aaa');
    const data = { username, school, email, password };

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
                    name="username"
                    placeholder="Pseudonim"
                    value={username}
                    onChange={e => setusername(e.target.value)}
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