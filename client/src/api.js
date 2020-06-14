import axios from 'axios'

export const addPost = async ({ title }) => {
  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/posts/create`, {
    title
  })
}

export const getPosts = async () => {
  return await axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts`)
}

export const addComment = async ({ postId, content }) => {
  await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/posts/${postId}/comments`,
    {
      content
    }
  )
}

export const getComments = async ({ postId }) => {
  return await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/posts/${postId}/comments`
  )
}
