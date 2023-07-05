import express from 'express'

import authRoute from '../users/auth.routes.js'
import userRoute from '../users/user.routes.js'
import postRoute from '../posts/post.routes.js'
import categoryRoute from '../categories/category.routes.js'
const app = express()

app
  .use('/auth', authRoute)
  .use('/users', userRoute)
  .use('/posts', postRoute)
  .use('/categories', categoryRoute)

export default app
