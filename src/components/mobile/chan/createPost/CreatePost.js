import React, { useState } from 'react';
import Add from './svg/addIco.svg'
import CreatePostForm from './CreatePostForm'

import './styles/createPost.scss'

const CreatePost = () => {
    const [createPostFrom, setCreatePostFrom] = useState(false)
    return (
        <div className="createPost">
            {createPostFrom
                ? <CreatePostForm setCreatePostFrom={setCreatePostFrom} />
                : <button
                    className="createPost__button"
                    onClick={() => setCreatePostFrom(true)}
                >
                    <img src={Add} alt="" />
                </button>
            }

        </div>
    );
}

export default CreatePost;