import { Err } from '../helpers/error.js'
import { HTTP_STATUSES } from '../constants/index.js'
const ADMIN_TYPE = 'admin'

const isAdmin = async (req, res, next) => {
  try {
    const { role } = req.user
    if (role !== ADMIN_TYPE) throw new Err("You can't perform this action. Unauthorized", HTTP_STATUSES.UNAUTHORIZED)

    next()
  } catch (err) {
    next(err)
  }
}

export default isAdmin
