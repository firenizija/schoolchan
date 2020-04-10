import React from 'react';
import closeIco from 'svg/closeIco.svg'

import './styles/menu.scss';
const logout = () => {
    localStorage.setItem("token", null);
    window.location.reload();
}

const Menu = ({ setMenu }) => {
    return (
        <aside className="menu">
            <div className="menu__header">
                Witaj, <span className="menu__username" >adam</span>
                <button className="menu__close" onClick={() => setMenu(false)}>
                    <img src={closeIco} alt="close" />
                </button>
            </div>
            <ul className="menu__options">
                <li className="menu__option menu__option--chosen">Tablica</li>
                <li className="menu__option">Moje posty</li>
                <li className="menu__option">Obserwowane</li>
                <li className="menu__option">Sklep</li>
                <li className="menu__option">Randka</li>
                <li className="menu__option">Ustawienia</li>
                <li
                    className="menu__option menu__option--logout"
                    onClick={() => logout()}
                >
                    Wyloguj
                </li>
            </ul>
        </aside>
    );
}

export default Menu;