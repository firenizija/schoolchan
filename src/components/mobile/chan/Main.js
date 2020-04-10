import React, { useState } from 'react';
import TopBar from './TopBar';
import Chan from './Chan';
import Chat from './aside/chat/Chat';
import Menu from './aside/menu/Menu';
import useForceUpdate from 'use-force-update';

const Main = () => {
    const forceUpdate = useForceUpdate();
    const [menu, setMenu] = useState(false);
    window.onload = () => {
        window.location.hash = "";
    }
    console.log()
    return (
        <div>
            <TopBar setMenu={setMenu} forceUpdateMain={forceUpdate} />
            {window.location.hash.indexOf("chat") > 0 ? <Chat forceUpdateMain={forceUpdate} /> : null}
            {menu ? <Menu setMenu={setMenu} /> : null}
            <Chan setMenu={setMenu} />
        </div>
    );
}

export default Main;