import React, { useEffect, useState } from 'react'
import { getComments } from './api'

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState({})

  useEffect(() => {
    getComments({ postId }).then(({ data }) => {
      setComments(data)
    })
  }, [postId])

  return (
    <ul>
      {Object.values(comments).map(({ id, content }) => (
        <li key={id}>{content}</li>
      ))}
    </ul>
  )
}

export default CommentList
