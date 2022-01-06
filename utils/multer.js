const multer = require("multer");
const path = require("path");

//multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("file must be .jpg /.jpeg /.png"), false);
      return;
    }
    cb(null, true);
  },
});
