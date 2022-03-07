'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        unique: true
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        unique: true
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      placeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Places' }
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
    return queryInterface.dropTable('Bookings');
  }
};
