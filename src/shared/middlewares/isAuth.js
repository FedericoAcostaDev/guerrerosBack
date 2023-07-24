import { Err } from '../helpers/error.js'
import { HTTP_STATUSES } from '../constants/index.js'
import { verifyToken } from '../../users/utils/jwt.js'

const isAuth = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization
    const token = bearerToken && bearerToken.split(' ')[1]

    if (!token) throw new Err('Token not valid. Unauthorized', HTTP_STATUSES.UNAUTHORIZED)

    const user = await verifyToken(token)
    req.user = user
    next()
  } catch (err) {
    next(err)
  }
}

export default isAuth
