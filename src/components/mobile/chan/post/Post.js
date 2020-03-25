import React, { useState, useEffect } from 'react';
import racoonMale from 'svg/racoon_male.svg';
import reportIcon from 'svg/report.svg';
import Comments from './Comments'
import whenPosted from 'helper/whenPosted'
import { useSelector } from 'react-redux'

import './styles/post.scss';

const Post = ({ post }) => {
    const socket = useSelector(state => state.socket)
    const [commentsView, setCommentsView] = useState(false);
    let { comments, image, body, createdAt, username, _id } = post;
    const [postComments, setPostComments] = useState(comments);
    let commentsLength
    try {
        commentsLength = postComments.length
    } catch (err) {
        commentsLength = 0
        setPostComments([])
    }
    let shortPosts
    try {
        shortPosts = postComments.slice(0, 3)
    } catch (err) {
        shortPosts = []
    }

    useEffect(() => {
        socket.on('comment', (comment) => {
            if (comment.postId === _id) {
                setPostComments([...postComments, comment])
            }
        });
    }, [socket, postComments, _id]);


    return (
        <li className="post">
            <img src={racoonMale} alt="sex" className="post__sex" />
            <div className="post__content">
                <div className="post__username">{username}</div>
                <div className="post__postDate">{whenPosted(createdAt)}</div>
                <div className="post__body">{body}</div>
                {image ? <img className="post__image" src={image.medium} alt="" /> : null}
                <div className="post__buttons">
                    <button className="post__like">+1</button>
                    <button className="post__dislike">-1</button>
                    <button
                        className="post__commentsButton"
                        onClick={() => setCommentsView(true)}
                    >
                        {commentsLength === 0 ? "Napisz komentarz" : `Komentarze ${commentsLength}`}
                    </button>
                </div>
            </div>
            <button className="post__reportButton">
                <img src={reportIcon} alt="report" />
            </button>
            <div className="post__bottom">
                <hr className="post__hr" />
                <div>
                    <div className="post__votes">
                        <span className="post__reactions">
                            13
                        </span>
                        <span>&nbsp;szopów jest za, a&nbsp;</span>
                        <span className="post__reactions">
                            5
                        </span>
                        <span>&nbsp;przeciw</span>
                    </div>
                    <ul className="post__comments">
                        {shortPosts.map((comment, key) => (
                            <li key={key}>
                                <span className="post__username">{comment.username}</span> {comment.commentText}
                            </li>
                        ))}
                        {commentsLength > 3 ?
                            <li>
                                <button className="post__showAllButton" onClick={() => setCommentsView(true)}>
                                    Zobacz wszystkie
                                </button>
                            </li>
                            : null}
                    </ul>
                </div>
            </div>
            {commentsView ? <Comments post={post} postComments={postComments} setCommentsView={setCommentsView} focus={commentsLength === 0 ? true : false} /> : null}
        </li>
    );
}

export default Post;