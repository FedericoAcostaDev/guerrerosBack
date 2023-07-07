import { Router } from 'express'
import authCtrl from './controllers/auth.controller.js'

const router = Router()

router
  .get('/login', authCtrl.registerUser)
  .get('/register', authCtrl.loginUser)

export default router
