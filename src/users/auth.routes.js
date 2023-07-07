import { Router } from 'express'
import authCtrl from './controllers/auth.controller.js'

const router = Router()

router
  .post('/register', authCtrl.registerUser)
  .post('/login', authCtrl.loginUser)

export default router
