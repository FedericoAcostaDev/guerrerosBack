import { Err } from '../../shared/helpers/error.js'
import User from '../entities/user.entity.js'
import { verify, encrypt } from '../utils/bcrypt.js'

const registerUser = async (userData) => {
  const { username, email, password, public_id: cloudinaryID } = userData

  const passwordHashed = await encrypt(password)

  const newUser = new User({
    username,
    email,
    password: passwordHashed,
    cloudinary_id: cloudinaryID
  })

  const user = await newUser.save()
  return user
}

const loginUser = async (credentials) => {
  const { username, password } = credentials

  const user = await User.findOne({ username }).select('-createdAt -updatedAt -__v')
  if (!user) throw new Err('Your username and password do not match. Try again', 401)

  const { password: passwordHashed } = user

  const isMatch = await verify(password, passwordHashed)
  if (!isMatch) throw new Err('Your username and password do not match. Try again', 401)

  const { password: _, ...userWithoutSensitiveData } = user._doc

  return userWithoutSensitiveData
}

export default {
  registerUser,
  loginUser
}
