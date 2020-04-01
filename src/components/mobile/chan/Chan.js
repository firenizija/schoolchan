import React from 'react';
import Posts from './post/Posts'
import CreatePost from './createPost/CreatePost'

import './styles/chan.scss'


const Chan = ({ setMenu }) => {
    return (
        <div className="chan" onClick={() => setMenu(false)}>
            <Posts />
            <CreatePost />
        </div>
    );
}

export default Chan;