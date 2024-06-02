// CRUD PRODUCT
const productService = require("../services/productService");

// GET ALL PRODUCT
const findAll = async (req, res, next) => {
  try {
    const data = await productService.findAll();

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// GET DETAIL PRODUCT
const findOne = async (req, res, next) => {
  try {
    const data = await productService.findOne(req.params);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// CREATE PRODUCT
const create = async (req, res, next) => {
  try {
    const data = await productService.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

// UPDATE PRODUCT
const update = async (req, res, next) => {
  try {
    const params = {
      id: req.params.id,
      body: req.body,
    };
    const data = await productService.update(params);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// DELETE PRODUCT
const destroy = async (req, res, next) => {
  try {
    await productService.destroy(req.params);
    res.status(200).json({ message: "product deleted" });
  } catch (error) {
    next(error);
  }
};

const uploadImage = async (req, res, next) => {
  try {
    const data = await productService.uploadImage({ file: req.file });
    res.status(200).json({ message: "image uploaded", data });
  } catch (error) {
    next(error);
  }
};

module.exports = { findAll, findOne, create, update, destroy, uploadImage };
