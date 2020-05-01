import React from 'react';
import PropTypes from 'prop-types';
import backButton from 'svg/backButton.svg';
import online from 'svg/online.svg';
import './styles/topBarChat.scss';

const TopBarChat = ({ chatWith, setChatWith }) => (
    <div className="topBarChat">
      <button
        type="button"
        className="topBarChat__backButton"
        onClick={() => {
          setChatWith('');
          window.history.back();
        }}
      >
        <img src={backButton} alt="back" />
      </button>
      <div className="topBarChat__title">{chatWith}</div>
      <div className="topBarChat__online">
        <div className="topBarChat__onlineNumber">1</div>
        <img src={online} alt="online" />
      </div>
    </div>
);

TopBarChat.propTypes = {
  chatWith: PropTypes.string.isRequired,
  setChatWith: PropTypes.func.isRequired,
};

export default TopBarChat;
