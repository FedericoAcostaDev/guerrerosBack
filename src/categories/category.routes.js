import { Router } from 'express'
import categoryCtrl from './controllers/category.controller.js'
import isAuth from '../shared/middlewares/isAuth.js'
const router = Router()

router
  .get('/', categoryCtrl.getCategories)
  .post('/', isAuth, categoryCtrl.createCategory)

export default router
