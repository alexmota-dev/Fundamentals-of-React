import React from 'react'

const Post = (props) => {
  return (
    <div>
        <article>
            <strong>{props.title}</strong><br/>
            <small>{props.subtitle}</small><br/>
        </article>
    </div>
  )
}

export default Post