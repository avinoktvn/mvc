"use strict";

const { create } = require("../repositories/productRepository");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        title: "Laptop",
        sku: "SKU-001",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Kulkas",
        sku: "SKU-002",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Oven",
        sku: "SKU-003",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dispenser",
        sku: "SKU-004",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
