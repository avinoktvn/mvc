// CRUD PRODUCT
const { where } = require("sequelize");
const productRepository = require("../repositories/productRepository");

// GET ALL PRODUCT
const findAll = async (params) => {
  const data = await productRepository.findAll();
  return data;
};

// GET DETAIL PRODUCT
const findOne = async (params) => {
  const { id } = params;

  const filterOptions = {
    where: {
      id: id,
    },
  };
  const data = await productRepository.findOne(filterOptions);
  if (!data) {
    throw { name: "Product not found" };
  }
  return data;
};

// CREATE PRODUCT
const create = async (params) => {
  const data = await productRepository.create(params);
  return data;
};

// UPDATE PRODUCT
const update = async (params) => {
  const { id, body } = params;

  const filterOption = {
    where: {
      id: +id,
    },
  };

  const updateParams = {
    filterOption,
    body,
  };

  const data = await productRepository.update(updateParams);

  return data;
};

// DELETE PRODUCT
const destroy = async (params) => {
  const { id } = params;

  const filterOption = {
    where: {
      id: +id,
    },
  };
  await productRepository.destroy(filterOption);
};

const uploadImage = async (params) => {
  const { file } = params;

  if (!file) throw { name: "File not found" };

  const allowedExtensions = ["image/png", "image/jpeg", "image/jpg"];
  if (allowedExtensions.includes(file.mimetype)) {
    const imageUrl = `http://localhost:3000/api/images/${file.filename}`;
    return imageUrl;
  } else {
    throw { name: "Invalid File" };
  }
};

module.exports = { findAll, findOne, create, update, destroy, uploadImage };
