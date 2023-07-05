import dotenv from 'dotenv'
dotenv.config()

const config = {
  PORT: process.env.PORT || 5000,
  DATABASE_URL: process.env.MONGO_URL,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
}  

export default config