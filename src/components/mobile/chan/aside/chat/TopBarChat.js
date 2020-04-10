import React from 'react';

import backButton from 'svg/backButton.svg';
import online from 'svg/online.svg';
import './styles/topBarChat.scss'

const TopBarChat = ({ chatWith, setChatWith }) => {
    return (
        <div className="topBarChat">
            <button className="topBarChat__backButton" onClick={() => { setChatWith(''); window.history.back(); }}>
                <img src={backButton} alt="back" />
            </button>
            <div className="topBarChat__title">
                {chatWith}
            </div>
            <div className="topBarChat__online">
                <div className="topBarChat__onlineNumber">1</div>
                <img src={online} alt="online" />
            </div>
        </div>
    );
}

export default TopBarChat;