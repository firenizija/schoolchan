import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect } from 'react-redux';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Post from './Post';

import './styles/posts.scss';

const Posts = ({ postType, posts }) => {
  let waitForMorePosts = false;
  const socket = useSelector((state) => state.socket);

  useScrollPosition(
    ({ currPos }) => {
      const scrollProgress = document.body.offsetHeight - window.innerHeight + currPos.y;
      if (!waitForMorePosts && scrollProgress < 0) {
        socket.emit('getMorePosts', posts.postsLastId);
        waitForMorePosts = true;
      }
    },
    [posts],
    null,
    false,
    300,
  );

  return (
    <ul className="posts">
      {posts[postType].map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </ul>
  );
};

const mapPosts = (posts) => posts;

Posts.propTypes = {
  postType: PropTypes.string,
  posts: PropTypes.objectOf(PropTypes.any).isRequired,
};
Posts.defaultProps = {
  postType: 'posts',
};
export default connect(mapPosts)(Posts);
