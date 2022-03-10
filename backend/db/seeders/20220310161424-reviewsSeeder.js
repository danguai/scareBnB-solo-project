'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const reviewOne = {
      title: 'what a unique place',
      review: 'this is the best place this is the best place this is the best place this is the best place',
      score: 5,
      userId: 2,
      placeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const reviewTwo = {
      title: 'How DEAR YOU',
      review: 'WHUT>>>>>>??????',
      score: 2,
      userId: 1,
      placeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return queryInterface.bulkInsert('Reviews', [reviewOne, reviewTwo], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
