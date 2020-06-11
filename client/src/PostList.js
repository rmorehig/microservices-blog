import React, { useState, useEffect } from 'react'
import axios from 'axios'

const getPosts = async () => {
  return await axios.get(`${process.env.REACT_APP_POSTS_SERVICE}/posts`)
}

const PostList = () => {
  const [posts, setPosts] = useState({})

  useEffect(() => {
    getPosts().then(({ data }) => {
      setPosts(data)
    })
  }, [])

  console.log(posts)
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Post List</h2>
        <ul>
          {Object.values(posts).map(({ id, title }) => (
            <li key={id} style={{ marginBottom: '16px', width: '30%' }}>
              <div className="card">
                <div className="card-content">
                  <h3 className="title">{title}</h3>
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
