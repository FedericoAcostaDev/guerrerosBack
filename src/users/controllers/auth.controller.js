import authServices from '../services/auth.service.js'

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password, public_id: cloudinaryID } = req.body

    const newUser = { username, email, password, cloudinaryID }
    const user = await authServices.registerUser(newUser)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const user = { username, password }
    const response = await authServices.loginUser(user)

    res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}

export default {
  loginUser,
  registerUser
}
