import { Router } from 'express'
import userCtrl from './controllers/user.controller.js'
import upload from '../shared/utils/multer.js'

const router = Router()

router
  .get('/upload', upload.single('avatar'), userCtrl.uploadImage)
  .get('/:id', userCtrl.getUser)
  .put('/:id', userCtrl.updateUser)
  .delete('/:id', userCtrl.deleteUser)

export default router
