'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(85)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      zipcode: {
        allowNull: false,
        type: Sequelize.STRING(5)
      },
      price: {
        allowNull: false,
        type: Sequelize.NUMERIC(6, 2)
      },
      rating: {
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Places');
  }
};
