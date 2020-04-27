import React, { useState } from 'react';
import useForceUpdate from 'use-force-update';
import TopBar from './TopBar';
import Chan from './Chan';
import Chat from './aside/chat/Chat';
import Menu from './aside/menu/Menu';

const Main = () => {
  const forceUpdate = useForceUpdate();
  const [menu, setMenu] = useState(false);
  const [postType, setPostType] = useState('posts');
  window.onload = () => {
    window.location.hash = '';
  };
  return (
    <div>
      <TopBar setMenu={setMenu} forceUpdateMain={forceUpdate} />
      {window.location.hash.indexOf('chat') > 0 ? <Chat forceUpdateMain={forceUpdate} /> : null}
      {menu ? <Menu setMenu={setMenu} setPostType={setPostType} postType={postType} /> : null}
      <Chan postType={postType} />
    </div>
  );
};

export default Main;
