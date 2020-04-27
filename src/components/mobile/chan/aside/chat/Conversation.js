import React from 'react';
import PropTypes from 'prop-types';
import TopBarChat from './TopBarChat';
import Messages from './messages/Messages';
import MessageForm from './MessageForm';

import './styles/conversation.scss';

const Conversation = ({ chatWith, setChatWith }) => (
    <div className="conversation">
      <TopBarChat chatWith={chatWith} setChatWith={setChatWith} />
      <Messages chatWith={chatWith} />
      <MessageForm chatWith={chatWith} />
    </div>
);

Conversation.propTypes = {
  chatWith: PropTypes.string,
  setChatWith: PropTypes.func,
};

Conversation.defaultProps = {
  chatWith: 'all',
  setChatWith: () => 0,
};

export default Conversation;
