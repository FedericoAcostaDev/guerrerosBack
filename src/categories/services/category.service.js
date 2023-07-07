import Category from '../entities/category.entity.js'

const getCategories = async () => {
  const categories = await Category.find()
  return categories
}

const createCategory = async (categoryData) => {
  const { name } = categoryData
  console.log(name)
  const newCategory = new Category({ name })
  const category = await newCategory.save()
  return category
}

export default {
  createCategory,
  getCategories
}
