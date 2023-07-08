import { Err } from '../../shared/helpers/error.js'
import User from '../entities/user.entity.js'

const getUser = async (userId) => {
  const user = await User.findById(userId)
  if (!user) throw new Err('this user not exists', 404)

  const { password: _, ...userWithoutSensitiveData } = user._doc
  return userWithoutSensitiveData
}

export default {
  getUser
}
