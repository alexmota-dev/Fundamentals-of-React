import React from 'react'
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = (props) => {
  return (
    <div>
      <article>
          <PostHeader
            post={{
              id: props.post.id,
              title: props.post.title,
              read: props.post.read,
            }}
            onRemove = {props.onRemove}
          ></PostHeader>
          <br/>
          <small>{props.post.subtitle}</small>
          <br/>
          Media: {props.post.likes / 2}
          <br/>
      </article>
  </div>
  )
}

Post.propTypes ={
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Post;