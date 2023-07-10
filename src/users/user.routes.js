import { Router } from 'express'
import userCtrl from './controllers/user.controller.js'
import upload from '../shared/utils/multer.js'

const router = Router()

router.route('/upload')
  .get(upload.single('avatar'), userCtrl.uploadImage)

router.route('/:id')
  .get(userCtrl.getUser)
  .put(userCtrl.updateUser)
  .delete(userCtrl.deleteUser)

export default router
