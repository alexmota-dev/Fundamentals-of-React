import React from 'react'
import PropTypes from 'prop-types';

const Post = (props) => {
  return (
    <div>
      <article>
          <strong>{props.post.title}</strong>
          <button onClick={()=> props.onRemove(props.post.id)}>Remover</button>
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
  }).isRequired,
};

export default Post;