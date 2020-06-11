import React from 'react'

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map(({ id, content }) => (
        <li key={id}>{content}</li>
      ))}
    </ul>
  )
}

export default CommentList
