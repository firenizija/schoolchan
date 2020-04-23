import React from 'react';
import Posts from './post/Posts'
import CreatePost from './createPost/CreatePost'

import './styles/chan.scss'


const Chan = ({ postType }) => {
    const visible = { display: "block" };
    if (window.location.hash !== "") {
        visible.display = "none";
    } else visible.display = "block";
    return (
        <div style={visible} className="chan">
            <Posts postType={postType} />
            <CreatePost />
        </div>
    );
}

export default Chan;