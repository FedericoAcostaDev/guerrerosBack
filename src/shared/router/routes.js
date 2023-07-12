import express from 'express'
import authRoute from '../../auth/router/auth.routes.js'
import userRoute from '../../users/router/user.routes.js'
import postRoute from '../../posts/router/post.routes.js'
import categoryRoute from '../../categories/router/category.routes.js'
const app = express()

app
  .use('/auth', authRoute)
  .use('/users', userRoute)
  .use('/posts', postRoute)
  .use('/categories', categoryRoute)

export default app
