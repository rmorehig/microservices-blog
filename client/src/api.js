import axios from 'axios'

export const addPost = async ({ title }) => {
  await axios.post(`${process.env.REACT_APP_POSTS_SERVICE}/posts`, {
    title,
  })
}

export const getPosts = async () => {
  return await axios.get(`${process.env.REACT_APP_POSTS_SERVICE}/posts`)
}

export const addComment = async ({ postId, content }) => {
  await axios.post(
    `${process.env.REACT_APP_COMMENTS_SERVICE}/posts/${postId}/comments`,
    {
      content,
    }
  )
}

export const getComments = async ({ postId }) => {
  return await axios.get(
    `${process.env.REACT_APP_COMMENTS_SERVICE}/posts/${postId}/comments`
  )
}
