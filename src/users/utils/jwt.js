import jwt from 'jsonwebtoken'
import { Err } from '../../shared/helpers/error.js'
import config from '../../config/index.js'
const { SECRET_KEY } = config

const generateToken = (payload) => jwt.sign(payload, SECRET_KEY, { expiresIn: 60 * 60 })

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        reject(new Err('Token not valid. Unauthorized', 403))
      }

      resolve(user)
    })
  })
}

export { generateToken, verifyToken }
