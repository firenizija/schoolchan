import React from 'react';
import TopBar from './TopBar';
import Chan from './Chan'

const Main = () => {
    return (
        <div>
            <TopBar />
            <Chan />
            {/* Logged in */}
            {/* <button onClick={() => localStorage.removeItem('token')}>Wyloguj</button> */}
        </div>
    );
}

export default Main;