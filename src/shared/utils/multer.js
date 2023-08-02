import multer from 'multer'
import path from 'path'

// multer config
export default multer({
  storage: multer.diskStorage({}),
  limits: { fieldSize: 25 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      cb(new Error('file must be .jpg /.jpeg /.png'), false)
    }
    cb(null, true)
  }
})
