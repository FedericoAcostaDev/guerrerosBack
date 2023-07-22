import { Err } from '../helpers/error.js'

const isAdmin = async (req, res, next) => {
  try {
    const { role } = req.user
    if (role !== 'admin') throw new Err("You can't perform this action. Unauthorized", 401)

    next()
  } catch (err) {
    next(err)
  }
}

export default isAdmin
