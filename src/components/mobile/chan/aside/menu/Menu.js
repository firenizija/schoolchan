/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
// import closeIco from 'svg/closeIco.svg';
import { useSelector } from 'react-redux';
import racoonMale from 'svg/racoon_male.svg';
import { setCookie } from 'helper/cookies';
import './styles/menu.scss';

const logout = () => {
  localStorage.setItem('token', null);
  setCookie('token', '', 0);
  window.location.reload();
};

const Menu = ({ setMenu, setPostType, postType }) => {
  const username = useSelector((state) => state.userInfo.username);
  return (
    <aside className="menu">
      <div className="menu__content">
        <div className="menu__header">
          <img src={racoonMale} alt="profile" className="menu__profile" />
          Witaj,&nbsp;<span className="menu__username">{username}</span>
          {/* <button className="menu__close" onClick={() => setMenu(false)}>
                        <img src={closeIco} alt="close" />
                    </button> */}
        </div>
        <div className="menu__options">
          <button
            type="button"
            className={`menu__option ${postType === 'posts' ? 'menu__option--chosen' : null}`}
            onClick={() => {
              setPostType('posts');
              setMenu(false);
            }}
          >
            Tablica
          </button>
          <button
            type="button"
            className={`menu__option ${postType === 'myPosts' ? 'menu__option--chosen' : null}`}
            onClick={() => {
              setPostType('myPosts');
              setMenu(false);
            }}
          >
            Moje posty
          </button>
          <button
            type="button"
            className={`menu__option ${
              postType === 'followingPosts' ? 'menu__option--chosen' : null
            }`}
            onClick={() => {
              setPostType('followingPosts');
              setMenu(false);
            }}
          >
            Obserwowane
          </button>
          <button type="button" className="menu__option">
            Sklep
          </button>
          <button type="button" className="menu__option">
            Randka
          </button>
          <button type="button" className="menu__option">
            Ustawienia
          </button>
          <button
            type="button"
            className="menu__option menu__option--logout"
            onClick={() => logout()}
          >
            Wyloguj
          </button>
        </div>
      </div>
      <div className="menu__bg" onClick={() => setMenu(false)} />
    </aside>
  );
};

Menu.propTypes = {
  setMenu: PropTypes.func.isRequired,
  setPostType: PropTypes.func.isRequired,
  postType: PropTypes.string,
};

Menu.defaultProps = {
  postType: 'posts',
};

export default Menu;
