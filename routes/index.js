const express = require("express");
const router = express.Router();
const authRoute = require("./authRoute");
const productRoute = require("./productRoute");
const path = require("path");

// PREFIX
router.use("/api/images", express.static(path.join(__dirname, "../uploads")));
router.use("/api/auth", authRoute);
router.use("/api/products", productRoute);

module.exports = router;
