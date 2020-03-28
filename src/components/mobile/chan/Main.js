import React from 'react';
import TopBar from './TopBar';
import Chan from './Chan'

const Main = () => {
    window.onbeforeunload = () => {
        return "Napewno chcesz opuścić stronę?";
    }
    window.onload = () => {
        window.location.hash = "";
    }
    return (
        <div>
            <TopBar />
            <Chan />
        </div>
    );
}

export default Main;