import React from 'react';
import Posts from './post/Posts'
import CreatePost from './createPost/CreatePost'
import SocketConnect from 'api/SocketConnect'

import './styles/chan.scss'


const Chan = () => {
    SocketConnect();

    return (
        <div className="chan">
            <Posts />
            <CreatePost />
        </div>
    );
}

export default Chan;