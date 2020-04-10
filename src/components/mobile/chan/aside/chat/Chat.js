import React, { useState } from 'react';
import Conversation from './Conversation';
import all from 'svg/all.svg';
import online from 'svg/online.svg';

import './styles/chat.scss';

const Chat = ({ forceUpdateMain }) => {
    const [chatWith, setChatWith] = useState('');
    window.onhashchange = () => {
        forceUpdateMain();
    }

    return (
        <>
            <div className="chat">
                <button
                    className="chat__all"
                    onClick={() => {
                        setChatWith('all');
                        window.location.hash += "/#all"
                    }}>
                    <div className="chat__allHeader">
                        <img src={all} alt="wtf" />
                        <div className="chat__allTitle">
                            Wszyscy
                    </div>
                    </div>
                    <div className="chat__allOnline">
                        <div className="chat__allOnlineNumber">0</div>
                        <img src={online} alt="" />
                    </div>
                </button>
                <ul>
                    <li>Tu znajdą się Twoje rozmowy z innymi szopami</li>
                </ul>
            </div>
            {chatWith ? <Conversation chatWith={chatWith} setChatWith={setChatWith} /> : null}
        </>
    );
}

export default Chat;