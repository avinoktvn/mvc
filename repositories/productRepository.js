// CRUD PRODUCT
const { Product } = require("../models");

// GET ALL PRODUCT
const findAll = async (params) => {
  const data = await Product.findAll();
  return data;
};

// GET DETAIL PRODUCT
const findOne = async (params) => {
  const data = await Product.findOne(params);
  return data;
};

// CREATE PRODUCT
const create = async (params) => {
  const data = await Product.create(params);
  return data;
};

// UPDATE PRODUCT
const update = async (params) => {
  const { filterOption, body } = params;

  let data = await Product.findOne(filterOption);

  if (!data) throw { name: "Product not found" };

  data = await data.update(body, { returning: true });

  return data;
};

// DELETE PRODUCT
const destroy = async (params) => {
  const data = await Product.findOne(params);

  if (!data) throw { name: "Product not found" };

  await data.destroy();
};

// const uploadImage = async (params) => {

module.exports = { findAll, findOne, create, update, destroy };
