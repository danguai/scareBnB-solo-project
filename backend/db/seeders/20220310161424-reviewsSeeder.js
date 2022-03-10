'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [{
      title: 'what a unique place',
      review: 'this is the best place',
      userId: 1,
      placeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
