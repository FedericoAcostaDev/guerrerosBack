import { Err } from '../helpers/error.js'
import { verifyToken } from '../../users/utils/jwt.js'

const isAuth = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization
    const token = bearerToken && bearerToken.split(' ')[1]

    if (!token) throw new Err('Token not valid. Unauthorized', 401)

    const user = await verifyToken(token)
    req.user = user
    next()
  } catch (err) {
    next(err)
  }
}

export default isAuth
