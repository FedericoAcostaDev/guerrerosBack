import express from "express";
import User from "./entities/user.entity.js";
import Post from "../posts/entities/post.entity.js";
import bcrypt from "bcrypt";
import cloudinary from "../utils/cloudinary.js";
import upload from "../utils/multer.js";

const router = express.Router();

//UPDATE
router.put("/:id", upload.single("image"), async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      //delete image from cloudinary
      await cloudinary.uploader.destroy(user.cloudinary_id);
      //upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
          cloudinary_id: result.public_id,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        //delete image from cloudinary
        await cloudinary.uploader.destroy(user.cloudinary_id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST IMAGES
router.post("/upload", upload.single("avatar"), async (req, res) => {
  console.log("/users/upload triggered");
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // Save user
    User.findById(req.body.id, (err, user) => {
      if (err) console.log(err);
      user.profilePic = result.secure_url;
      user.save((err) => {
        if (err) console.log(err);
        res.json(user);
        console.log("user saved");
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;