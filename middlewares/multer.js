const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`Direktori dibuat: ${uploadDir}`);
}

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const randomFileName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, randomFileName);
  },
});

const multerMiddleware = multer({
  storage: diskStorage,
}).single("image");

module.exports = multerMiddleware;
