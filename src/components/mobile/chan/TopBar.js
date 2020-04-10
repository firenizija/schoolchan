import React from 'react';
import chatIco from 'svg/chatIco.svg';
import userIco from 'svg/userIco.svg';
import backButton from 'svg/backButton.svg';
import newChat from 'svg/newChat.svg';


import './styles/topBar.scss'

const TopBar = ({ setMenu, forceUpdateMain }) => {
    return (
        <div className="topBar">
            <ul className="topBar__optionsList">
                {window.location.hash === "#chat" ?
                    <li className="topBar__options topBar__options--button">
                        <button
                            className="topBar__button topBar__button--menu"
                            onClick={() => {
                                window.history.back();
                            }}
                        >
                            <img src={backButton} alt="" />
                        </button>
                    </li>
                    :
                    <li className="topBar__options topBar__options--button">
                        <button className="topBar__button topBar__button--menu" onClick={() => setMenu(true)}>
                            <img src={userIco} alt="" />
                        </button>
                    </li>
                }

                <li className="topBar__options topBar__options--banner">
                    schoolchan
                </li>
                {window.location.hash === "#chat" ?
                    <li className="topBar__options topBar__options--button">
                        <button className="topBar__button topBar__button--chat" onClick={() => null}>
                            <img src={newChat} alt="" />
                        </button>
                    </li>
                    :
                    <li className="topBar__options topBar__options--button">
                        <button
                            className="topBar__button topBar__button--chat"
                            onClick={() => {
                                window.location.hash = "chat";
                                forceUpdateMain()
                            }}>
                            <img src={chatIco} alt="" />
                        </button>
                    </li>
                }

            </ul>

        </div>
    );
}

export default TopBar;