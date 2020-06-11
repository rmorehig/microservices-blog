import React, { useState } from 'react'
import { addComment } from './api'

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('')

  const handleChange = event => {
    setContent(event.target.value)
  }
  const handleSubmit = async event => {
    event.preventDefault()
    await addComment({ postId, content })
    setContent('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">New Comment</label>
        <div className="control">
          <input value={content} onChange={handleChange} className="input" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>
    </form>
  )
}

export default CommentCreate
