import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()
// uploading routes, product imgs, add to uploads folder
const storage = multer.diskStorage({
  destination(cb) {
    cb(null, 'uploads/')
  },
  filename(file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})
// accepted img types
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)
// if not supported img type detected
  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (file, cb) {
    checkFileType(file, cb)
  },
})
// post image if it passes params
router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
})

export default router
