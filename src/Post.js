import React from 'react'
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import styles from "./Post.scss"

const Post = (props) => {
  return (
      <article
        className={
          props.post.removed
            ? styles.postDeleted
            : styles.post
          }
        >
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
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Post;