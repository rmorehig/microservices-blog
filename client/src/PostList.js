import React, { useState, useEffect } from 'react'
import { getPosts } from './api'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

const PostList = () => {
  const [posts, setPosts] = useState({})

  useEffect(() => {
    getPosts().then(({ data }) => {
      setPosts(data)
      console.log(data)
    })
  }, [])

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Post List</h2>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {Object.values(posts).map(({ id, title, comments }) => (
            <li
              key={id}
              style={{
                marginRight: '32px',
                marginBottom: '32px',
                width: '400px',
              }}
            >
              <div className="card">
                <div className="card-header">
                  <h3 className="card-header-title">{title}</h3>
                </div>
                <div className="card-content">
                  <div className="content">
                    <CommentList comments={comments} />
                    <CommentCreate postId={id} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PostList
