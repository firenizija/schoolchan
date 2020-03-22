import React, { useState } from 'react';
import racoonMale from 'svg/racoon_male.svg';
import reportIcon from 'svg/report.svg';
import Comments from './Comments'

import './styles/post.scss';

const Post = ({ post }) => {
    const [commentsView, setCommentsView] = useState(false)
    return (
        <li className="post">
            <img src={racoonMale} alt="sex" className="post__sex" />
            <div className="post__content">
                <div className="post__username">{post.username}</div>
                <div className="post__postDate">15 minut temu</div>
                <div className="post__body">{post.body}</div>
                <img className="post__image" src={post.image.medium} alt="" />
                <div className="post__buttons">
                    <button className="post__like">+1</button>
                    <button className="post__dislike">-1</button>
                    <button
                        className="post__commentsButton"
                        onClick={() => setCommentsView(true)}
                    >
                        Komentarze 23
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
                        <li>
                            <span className="post__username">anonim</span> o co chodzi z tym postem
                        </li>
                        <li>
                            <span className="post__username">szopeq</span> ???
                        </li>
                    </ul>
                </div>
            </div>
            {commentsView ? <Comments post={post} setCommentsView={setCommentsView} /> : null}
        </li>
    );
}

export default Post;