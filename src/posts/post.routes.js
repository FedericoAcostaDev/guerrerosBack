import { Router } from 'express'
import postCtrl from '../posts/controllers/post.controllers.js'
import upload from '../shared/utils/multer.js'

const router = Router()

router.route('/')
  .get(postCtrl.getPosts)
  .post(postCtrl.createPost)

router.route('/:id')
  .get(postCtrl.getPostById)
  .put(postCtrl.updatePost)
  .delete(postCtrl.deletePost)

router.route('/upload')
  .post(upload.single('avatar'), postCtrl.uploadFile)

export default router
