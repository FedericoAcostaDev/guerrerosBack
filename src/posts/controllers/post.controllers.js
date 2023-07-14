import { Router } from 'express'
import postService from '../services/post.service.js'
import { handleSuccessResponse } from '../../shared/helpers/responseHandler.js'
import { HTTP_STATUSES } from '../../shared/constants/index.js'

const router = Router()

const getPosts = async (req, res, next) => {
  try {
    const { username, categoryId } = req.query

    const filters = { username, categoryId }
    const posts = await postService.getPosts(filters)

    handleSuccessResponse({
      res,
      status: HTTP_STATUSES.OK,
      data: posts
    })
  } catch (err) {
    next(err)
  }
}

const getPostById = async (req, res, next) => {
  try {
    const { id: postId } = req.params
    const post = await postService.getPostById(postId)

    handleSuccessResponse({
      res,
      status: HTTP_STATUSES.OK,
      data: post
    })
  } catch (err) {
    next(err)
  }
}

const createPost = async (req, res, next) => {
  try {
    const { title, desc, photo, username, categories } = req.body

    const post = { title, desc, photo, username, categories }
    const data = await postService.createPost(post)

    handleSuccessResponse({
      res,
      status: HTTP_STATUSES.CREATED,
      message: 'Post created successfully',
      data
    })
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

    handleSuccessResponse({
      res,
      status: HTTP_STATUSES.OK,
      message: 'Post deleted successfully',
      data: post
    })
  } catch (err) {
    next(err)
  }
})

const deletePost = async (req, res, next) => {
  try {
    const { id: postId } = req.params
    const { username } = req.body

    await postService.deletePost({ postId, username })

    handleSuccessResponse({
      res,
      status: HTTP_STATUSES.OK,
      message: 'Post deleted successfully'
    })
  } catch (err) {
    next(err)
  }
}

const uploadFile = async (req, res, next) => {
  try {
    await postService.uploadFile()

    handleSuccessResponse({
      res,
      status: HTTP_STATUSES.OK,
      message: 'Post updated successfully'
    })
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
