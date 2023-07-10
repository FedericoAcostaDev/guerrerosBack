import { hash, compare } from 'bcrypt'

export const encrypt = async (password) => await hash(password, 8)

export const verify = async (password, passwordHashed) =>
  await compare(password, passwordHashed)
