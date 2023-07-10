import { Err } from '../../shared/helpers/error.js'
import categoryService from '../services/category.service.js'

const getCategories = async (req, res, next) => {
  try {
    const data = await categoryService.getCategories()
    if (data.length === 0) throw new Err('There are no categories', 404)

    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body

    const category = { name }
    const data = await categoryService.createCategory(category)
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
}

export default {
  createCategory,
  getCategories
}
