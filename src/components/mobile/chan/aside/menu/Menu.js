import React from 'react';
import closeIco from 'svg/closeIco.svg';
import { useSelector } from 'react-redux';
import racoonMale from 'svg/racoon_male.svg'
import { setCookie } from 'helper/cookies'

import './styles/menu.scss';
const logout = () => {
    localStorage.setItem("token", null);
    setCookie('token', "", 0);
    window.location.reload();
}

const Menu = ({ setMenu, setPostType, postType }) => {
    const username = useSelector(state => state.userInfo.username);
    return (
        <aside className="menu">
            <div className="menu__content">
                <div className="menu__header">
                    <img src={racoonMale} alt="profile" className="menu__profile" />
                    Witaj,&nbsp;<span className="menu__username" >{username}</span>
                    {/* <button className="menu__close" onClick={() => setMenu(false)}>
                        <img src={closeIco} alt="close" />
                    </button> */}
                </div>
                <ul className="menu__options">
                    <li
                        className={`menu__option ${postType === 'posts' ? 'menu__option--chosen' : null}`}
                        onClick={() => {
                            setPostType('posts');
                            setMenu(false);
                        }}
                    >
                        Tablica
                </li>
                    <li
                        className={`menu__option ${postType === 'myPosts' ? 'menu__option--chosen' : null}`}
                        onClick={() => {
                            setPostType('myPosts');
                            setMenu(false);
                        }}
                    >
                        Moje posty
                </li>
                    <li
                        className={`menu__option ${postType === 'followingPosts' ? 'menu__option--chosen' : null}`}
                        onClick={() => {
                            setPostType('followingPosts');
                            setMenu(false);
                        }}
                    >
                        Obserwowane
                </li>
                    <li className="menu__option">
                        Sklep
                </li>
                    <li className="menu__option">
                        Randka
                </li>
                    <li className="menu__option">
                        Ustawienia
                </li>
                    <li
                        className="menu__option menu__option--logout"
                        onClick={() => logout()}
                    >
                        Wyloguj
                </li>
                </ul>
            </div>
            <div className="menu__bg" onClick={() => setMenu(false)} />
        </aside>
    );
}

export default Menu;