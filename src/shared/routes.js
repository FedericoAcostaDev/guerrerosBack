import express from 'express';
const app = express();

import authRoute from '../users/auth.routes.js';
import userRoute from '../users/user.routes.js';
import postRoute from '../posts/post.routes.js';
import categoryRoute from '../categories/category.routes.js';

app
  .use("/auth", authRoute)
  .use("/users", userRoute)
  .use("/posts", postRoute)
  .use("/categories", categoryRoute);

export default app  