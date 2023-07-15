import express from 'express'
import Category from '../entities/category.entity.js'
const router = express.Router()

router.post('/', async (req, res) => {
  const newCat = new Category(req.body)
  try {
    const savedCat = await newCat.save()
    res.status(200).json(savedCat)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/', async (req, res) => {
  try {
    const cats = await Category.find()
    res.status(200).json(cats)
  } catch (err) {
    res.status(500).json(err)
  }
})

export default router
