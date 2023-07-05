const express = require('express');
const app = express();

const authRoute = require("../users/auth.routes");
const userRoute = require("../users/user.routes");
const postRoute = require("../posts/post.routes");
const categoryRoute = require("../categories/category.routes");

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

module.exports = app;     