import React from 'react';
import Posts from './post/Posts'
import CreatePost from './createPost/CreatePost'

import './styles/chan.scss'


const Chan = () => {
    return (
        <div className="chan">
            <Posts />
            <CreatePost />
        </div>
    );
}

export default Chan;