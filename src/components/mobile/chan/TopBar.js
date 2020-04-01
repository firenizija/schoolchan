import React from 'react';
import chatIco from 'svg/chatIco.svg'
import userIco from 'svg/userIco.svg'

import './styles/topBar.scss'

const TopBar = ({ setMenu }) => {
    return (
        <div className="topBar">
            <ul className="topBar__optionsList">
                <li className="topBar__options topBar__options--button">
                    <button className="topBar__button topBar__button--menu" onClick={() => setMenu(true)}>
                        <img src={userIco} alt="" />
                    </button>
                </li>
                <li className="topBar__options topBar__options--banner">
                    schoolchan
                </li>
                <li className="topBar__options topBar__options--button">
                    <button className="topBar__button topBar__button--chat">
                        <img src={chatIco} alt="" />
                    </button>
                </li>
            </ul>

        </div>
    );
}

export default TopBar;