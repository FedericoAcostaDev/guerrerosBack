import { Err } from '../../shared/helpers/error.js'
import Post from '../entities/post.entity.js'

const getPosts = async (filters) => {
  const { username, categoryId } = filters

  const where = {}
  if (username) where.username = username
  if (categoryId) where.categoryId = categoryId

  const posts = await Post.find(where)
  return posts
}

const getPostById = async postId => {
  const post = await Post.findById(postId)
  return post
}

const createPost = async postData => {
  const { title, desc, photo, username, categories } = postData

  const newPost = new Post({ title, desc, photo, username, categories })
  const post = await newPost.save()
  return post
}

const updatePost = async (postId, postData) => {
  const { title, desc, photo, username, categories } = postData

  const post = await Post.findById(postId)
  if (post.username !== username) throw new Err('You can update only your post!', 403)

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    {
      $set: { title, desc, photo, username, categories }
    },
    { new: true }
  )
  return updatedPost
}

const deletePost = async postData => {
  const { username, postId } = postData
  const post = await Post.findById(postId)
  if (post.username !== username) throw new Err('You can delete only your post!', 403)

  await post.delete()
}

const uploadFile = async () => {
  return ''
}

export default {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  uploadFile
}
