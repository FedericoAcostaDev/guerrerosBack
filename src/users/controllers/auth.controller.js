import authServices from '../services/auth.service.js'
import { handleSuccessResponse } from '../../shared/helpers/responseHandler.js'
import { HTTP_STATUSES } from '../../shared/constants/index.js'

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password, public_id: cloudinaryID } = req.body

    const newUser = { username, email, password, cloudinaryID }
    const user = await authServices.registerUser(newUser)

    handleSuccessResponse({
      res,
      status: HTTP_STATUSES.OK,
      data: user
    })
  } catch (err) {
    next(err)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const user = { username, password }
    const data = await authServices.loginUser(user)

    handleSuccessResponse({
      res,
      status: HTTP_STATUSES.OK,
      data
    })
  } catch (err) {
    next(err)
  }
}

export default {
  loginUser,
  registerUser
}
