import React, { useEffect } from 'react';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import CommentForm from './commentForm';
import backIco from 'svg/backIco.svg';
import useForceUpdate from 'use-force-update'
// import uploadImage from 'api/uploadImage';

import './styles/comments.scss';

const Comments = ({ post, focus, postComments, forceUpdatePost }) => {
    const socket = useSelector(state => state.socket);
    const forceUpdate = useForceUpdate();
    useEffect(() => {
        if (socket) {
            socket.on("comment", () => {
                forceUpdate()
            });
        }
    }, [socket, forceUpdate]);
    window.onhashchange = () => {
        forceUpdatePost();
    }
    return (
        <div className="comments">
            <div className="comments__topBar">
                <button
                    onClick={() => {
                        window.history.back();
                    }}
                >
                    <img src={backIco} alt="back" className="comments__backButtonImg" />
                </button>
                <div className="comments__title">Komentarze</div>
            </div>
            <ul className="comments__list">
                {postComments.slice(0).reverse().map((comment, key) => <Comment key={key} comment={comment} />)}
            </ul>
            <CommentForm focus={focus} post={post} />
        </div>
    );
}

export default Comments;