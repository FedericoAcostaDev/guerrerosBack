import express from 'express'
import User from '../../users/entities/user.entity.js'
import bcrypt from 'bcrypt'
const router = express.Router()

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      cloudinary_id: req.body.public_id
    })

    const user = await newUser.save()
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })

    if (!user) {
      return res.status(400).json('Wrong credentials!')
    }
    console.log('sadas')
    const validated = await bcrypt.compare(req.body.password, user.password)

    !validated && res.status(400).json('Wrong credentials!')

    const { password, ...others } = user._doc
    res.status(200).json(others)
  } catch (err) {
    res.status(500).json(err)
  }
})

export default router
