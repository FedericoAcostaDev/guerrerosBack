const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: procces.env.CLOUDINARY_CLOUD_NAME,
  cloud_key: procces.env.CLOUDINARY_API_KEY,
  cloud_secret: procces.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;
