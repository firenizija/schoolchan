import React from 'react';
import TopBarChat from './TopBarChat';
import Messages from './messages/Messages';
import MessageForm from './MessageForm';

import './styles/conversation.scss'

const Conversation = ({ chatWith, setChatWith }) => {
    const objDiv = document.querySelector('.conversation');
    if (objDiv) objDiv.scrollTop = objDiv.scrollHeight;
    return (
        <div className="conversation">
            <TopBarChat chatWith={chatWith} setChatWith={setChatWith} />
            <Messages chatWith={chatWith} />
            <MessageForm chatWith={chatWith} />
        </div>
    );
}

export default Conversation;