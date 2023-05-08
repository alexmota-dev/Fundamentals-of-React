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
          Media: {props.likes / 2}
          <br/>
      </article>
  </div>
  )
}

Post.propTypes ={
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;