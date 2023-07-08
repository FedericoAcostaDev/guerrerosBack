import { Router } from 'express'
import postService from '../services/post.service.js'

const router = Router()

const getPosts = async (req, res, next) => {
  try {
    const { username, categoryId } = req.query

    const filters = { username, categoryId }
    const posts = await postService.getPosts(filters)

    res.status(200).json(posts)
  } catch (err) {
    next(err)
  }
}

const getPostById = async (req, res, next) => {
  try {
    const { id: postId } = req.params
    const post = await postService.getPostById(postId)

    res.status(200).json(post)
  } catch (err) {
    next(err)
  }
}

const createPost = async (req, res, next) => {
  try {
    const { title, desc, photo, username, categories } = req.body

    const post = { title, desc, photo, username, categories }
    const data = await postService.createPost(post)
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}

const updatePost = router.put('/:id', async (req, res, next) => {
  try {
    const { id: postId } = req.params
    const { title, desc, photo, username, categories } = req.body

    const newPostData = { title, desc, photo, username, categories }
    const post = await postService.updatePost(postId, newPostData)

    res.status(200).json(post)
  } catch (err) {
    res.status(500).json(err)
  }
})

const deletePost = async (req, res, next) => {
  try {
    const { id: postId } = req.params
    const { username } = req.body

    await postService.deletePost({ postId, username })
    res.status(200).json({ message: 'post deleted' })
  } catch (err) {
    next(err)
  }
}

const uploadFile = async (req, res, next) => {
  try {
    await postService.uploadFile()
    res.status(500).json('route not available. need to correct')
  } catch (err) {
    next(err)
  }
}

export default {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  uploadFile
}
