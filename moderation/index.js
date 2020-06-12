const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.post('/events', (req, res) => {
  console.log('Received event', req.body.type)
  const { type, data } = req.body

  res.send({})
})

app.listen(4003, (req, res) => {
  console.log('Moderation service listening on 4003')
})
