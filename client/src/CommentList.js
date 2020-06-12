import React from 'react'

const renderContent = ({ content, status }) => {
  if (status === 'pending') return 'This comment is awaiting moderation'
  if (status === 'rejected') return 'This comment has been rejected'
  return content
}

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map(({ id, ...comment }) => (
        <li key={id}>{renderContent(comment)}</li>
      ))}
    </ul>
  )
}

export default CommentList
