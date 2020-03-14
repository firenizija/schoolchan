import React, { useState } from 'react';


const Login = () => {
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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Pseudonim"
                    value={username}
                    onChange={e => setusername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Hasło"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button>Zaloguj się</button>
            </form>
        </div>
    );
}

export default Login;