const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

const handleEvent = ({ type, data }) => {
  if (type === 'PostCreated') {
    const { id, title } = data
    posts[id] = { id, title, comments: [] }
  }
  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data
    const post = posts[postId]
    post.comments.push({ id, content, status })
  }
  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data
    const post = posts[postId]
    const comment = post.comments.find(comment => comment.id === id)
    comment.status = status
    comment.content = content
  }
}
app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/events', (req, res) => {
  console.log('Received event', req.body.type)
  const event = req.body
  handleEvent(event)
  res.send({})
})

app.listen(4002, async (req, res) => {
  console.log('Query service listening on 4002')
  const { data } = await axios.get('http://localhost:4005/events')
  data.forEach(event => {
    console.log('Processing event:', event.type)
    handleEvent(event)
  })
})
