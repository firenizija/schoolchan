import React, { useState, useEffect } from 'react';
import racoonMale from 'svg/racoon_male.svg';
import reportIcon from 'svg/report.svg';
import Comments from './Comments'
import whenPosted from 'helper/whenPosted'

import './styles/post.scss';

const Post = ({ post }) => {
    const [commentsView, setCommentsView] = useState(false);
    const [commentsLength, setCommentsLength] = useState()

    let { comments, image, body, createdAt, username } = post;
    //if comments is undefined make it array
    comments = comments ? comments : [];
    useEffect(() => {
        setCommentsLength(comments.length)
    }, [comments.length])

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
                        {comments[0] ?
                            <li>
                                <span className="post__username">{comments[0].username}</span> {comments[0].commentText}
                            </li>
                            : null}
                        {comments[1] ?
                            <li>
                                <span className="post__username">{comments[1].username}</span> {comments[1].commentText}
                            </li>
                            : null}
                    </ul>
                </div>
            </div>
            {commentsView ? <Comments post={post} setCommentsView={setCommentsView} /> : null}
        </li>
    );
}

export default Post;