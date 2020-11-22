const multer = require('multer')

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, './uploads/')
  },
  filename: (_req, file, callback) => {
    const extension = file.originalname.split('.').pop()
    const fileName = file.fieldname + '-' + Date.now() + '.' + extension
    callback(null, fileName)
  }
})

const fileFilter = (_request, file, callback) => {
  if ((file.mimetype === 'image/jpeg') || (file.mimetype === 'image/png')) {
    callback(null, true)
  } else {
    return callback(new Error('Extension file must be JPG or PNG'), false)
  }
}

const limits = { fileSize: 1024 * 1024 * 3 } //Max File Szie 3MB

const upload = multer({ storage, fileFilter, limits }).single('talent_cv')

const uploadFilter = (request, response, next) => {
  upload(request, response, function (err) {
    if (err instanceof multer.MulterError) {
      // Multer error occurred when uploading.
      response.status(400).send({
        success: false,
        message: err.message
      })
    } else if (err) {
      // Unknown error occurred when uploading.
      response.status(400).send({
        success: false,
        message: err.message
      })
    }
    next()
  })
}

module.exports = uploadFilter