import mongoose from "mongoose";
import config from './index.js'
const { DATABASE_URL } = config

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}

export default connectToDatabase