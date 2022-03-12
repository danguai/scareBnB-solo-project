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
      title: {
        allowNull: false,
        type: Sequelize.STRING(255)
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
      url_image_01: {
        type: Sequelize.TEXT
      },
      url_image_02: {
        type: Sequelize.TEXT
      },
      url_image_03: {
        type: Sequelize.TEXT
      },
      url_image_04: {
        type: Sequelize.TEXT
      },
      url_image_05: {
        type: Sequelize.TEXT
      },
      amenities_01: {
        type: Sequelize.STRING(100)
      },
      amenities_02: {
        type: Sequelize.STRING(100)
      },
      amenities_03: {
        type: Sequelize.STRING(100)
      },
      amenities_04: {
        type: Sequelize.STRING(100)
      },
      amenities_05: {
        type: Sequelize.STRING(100)
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
