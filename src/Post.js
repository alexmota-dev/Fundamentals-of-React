import React from 'react'
import PropTypes from 'prop-types';

const Post = (props) => {
  return (
    <div>
      <article>
          <strong>{props.post.title}</strong><br/>
          <small>{props.post.subtitle}</small><br/>
          Media: {props.likes / 2}
          <br/>
      </article>
  </div>
  )
}

Post.propTypes ={
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;