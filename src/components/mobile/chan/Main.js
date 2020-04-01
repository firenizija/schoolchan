import React, { useState } from 'react';
import TopBar from './TopBar';
import Chan from './Chan';
import Menu from './aside/menu/Menu';

const Main = () => {
    const [menu, setMenu] = useState(false);
    window.onload = () => {
        window.location.hash = "";
    }

    return (
        <div>
            <TopBar setMenu={setMenu} />
            {menu ? <Menu setMenu={setMenu} /> : null}
            <Chan setMenu={setMenu} />
        </div>
    );
}

export default Main;