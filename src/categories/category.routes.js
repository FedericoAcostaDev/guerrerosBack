import { Router } from 'express'
import categoryCtrl from './controllers/category.controller.js'
const router = Router()

router
  .get('/', categoryCtrl.getCategories)
  .post('/', categoryCtrl.createCategory)

export default router
