import React, { useState } from 'react'
import axios from 'axios'

const PostCreate = () => {
  const [title, setTitle] = useState('')
  const handleChange = event => {
    setTitle(event.target.value)
  }
  const handleSubmit = async event => {
    event.preventDefault()
    await axios.post(`${process.env.REACT_APP_POSTS_SERVICE}/posts`, {
      title,
    })
    setTitle('')
  }
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Create Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input value={title} onChange={handleChange} className="input" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default PostCreate
