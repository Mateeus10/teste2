"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'categories',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      category_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
  ),

  down: (queryInterface) => {
    queryInterface.dropTable('categories');
  },
};
