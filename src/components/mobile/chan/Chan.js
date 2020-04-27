import React from 'react';
import PropTypes from 'prop-types';
import Posts from './post/Posts';
import CreatePost from './createPost/CreatePost';

import './styles/chan.scss';

const Chan = ({ postType }) => {
  const visible = { display: 'block' };
  if (window.location.hash !== '') {
    visible.display = 'none';
  } else visible.display = 'block';
  return (
    <div style={visible} className="chan">
      <Posts postType={postType} />
      <CreatePost />
    </div>
  );
};
Chan.propTypes = {
  postType: PropTypes.string,
};
Chan.defaultProps = {
  postType: 'posts',
};
export default Chan;
