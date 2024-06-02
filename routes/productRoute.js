const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multerMiddleware = require("../middlewares/multer");

router.get("/", productController.findAll);
router.get("/:id", productController.findOne);
router.post("/", productController.create);
router.post("/uploads", multerMiddleware, productController.uploadImage);
router.put("/:id", productController.update);
router.delete("/:id", productController.destroy);

module.exports = router;
