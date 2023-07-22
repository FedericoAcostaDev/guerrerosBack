import { Router } from 'express'
import categoryCtrl from './controllers/category.controller.js'
import isAuth from '../shared/middlewares/isAuth.js'
import isAdmin from '../shared/middlewares/isAdmin.js'
const router = Router()

router
  .get('/', categoryCtrl.getCategories)
  .post('/', isAuth, isAdmin, categoryCtrl.createCategory)

export default router
