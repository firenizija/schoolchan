/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import racoonMale from 'svg/racoon_male.svg';
import reportIcon from 'svg/report.svg';
import useForceUpdate from 'use-force-update';
import whenPosted from 'helper/whenPosted';
import { useSelector } from 'react-redux';
import Comments from './Comments';

import './styles/post.scss';

const Post = ({ post }) => {
  const socket = useSelector((state) => state.socket);
  const [commentsLength, setCommentsLength] = useState(0);
  const {
    comments, image, body, createdAt, username, _id, like, dislike,
  } = post;

  const [reaction, setReaction] = useState({ like, dislike });

  const forceUpdate = useForceUpdate();
  useEffect(() => {
    try {
      setCommentsLength(comments.length);
    } catch (error) {
      setCommentsLength(0);
    }
  }, [comments.length]);

  useEffect(() => {
    socket.on('comment', (comment) => {
      if (_id === comment.postId) {
        setCommentsLength(comments.length + 1);
        comments.push(comment);
        forceUpdate();
      }
    });
  }, [comments, socket, _id, forceUpdate]);

  useEffect(() => {
    socket.on('newReactionAdd', ({ postId, type, usernameLike }) => {
      console.log({ [type]: [type].length });
      if (postId === _id) {
        if (type === 'like') {
          setReaction({ ...reaction, like: usernameLike });
          // like.push(usernameLike);
        } else setReaction({ ...reaction, dislike: usernameLike });
      }
    });
    socket.on('newReactionSub', ({ postId, type, usernameLike }) => {
      console.log({ ...reaction, [type]: [type].length });
      if (postId === _id) {
        if (type === 'like') {
          const index = like.indexOf(usernameLike);
          like.splice(index, 1);
        } else {
          const index = dislike.indexOf(usernameLike);
          dislike.splice(index, 1);
        }
        setReaction({ ...reaction, [type]: [type].length });
      }
    });
    // console.log(like);
  }, []);

  const handleReaction = (type) => {
    const reactionData = {
      postId: _id,
      type,
    };
    socket.emit('reaction', reactionData);
  };

  return (
    <li className="post">
      <img src={racoonMale} alt="sex" className="post__sex" />
      <div className="post__content">
        <div className="post__username">{username}</div>
        <div className="post__postDate">{whenPosted(createdAt)}</div>
        <div className="post__body">{body}</div>
        {image ? <img className="post__image" src={image.medium} alt="" /> : null}
        <div className="post__buttons">
          <button type="button" className="post__like" onClick={() => handleReaction('like')}>
            +1
          </button>
          <button type="button" className="post__dislike" onClick={() => handleReaction('dislike')}>
            -1
          </button>
          <button
            type="button"
            className="post__commentsButton"
            onClick={() => {
              window.location.hash = 'comments';
              forceUpdate();
            }}
          >
            {commentsLength === 0 ? 'Napisz komentarz' : `Komentarze ${commentsLength}`}
          </button>
        </div>
      </div>
      <button type="button" className="post__reportButton">
        <img src={reportIcon} alt="report" />
      </button>
      <div className="post__bottom">
        <hr className="post__hr" />
        <div>
          <div className="post__votes">
            <span className="post__reactions">{reaction.like.length}</span>
            <span>&nbsp;szopów jest za, a&nbsp;</span>
            <span className="post__reactions">{reaction.dislike.length}</span>
            <span>&nbsp;przeciw</span>
          </div>
          <ul className="post__comments">
            {comments
              .slice(0)
              .reverse()
              .slice(0, 3)
              .map((comment) => (
                <li key={comment._id}>
                  <span className="post__username">{comment.username}</span> {comment.commentText}
                </li>
              ))}
            {commentsLength > 3 ? (
              <li>
                <button
                  type="button"
                  className="post__showAllButton"
                  onClick={() => {
                    window.location.hash = 'comments';
                    forceUpdate();
                  }}
                >
                  Zobacz wszystkie
                </button>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      {window.location.hash === '#comments' ? (
        <Comments
          forceUpdatePost={forceUpdate}
          post={post}
          postComments={comments}
          focus={commentsLength === 0}
        />
      ) : null}
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Post;
