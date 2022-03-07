'use strict';

const { faker } = require('@faker-js/faker');

const randomId = num => Math.floor(Math.random() * Math.floor(num) + 1);

module.exports = {
  up: (queryInterface, Sequelize) => {
    let reviewsArr = [];

    let i = 0;
    while (i < 20) {
      const review = {
        userId: randomId(15),
        placeId: randomId(10),
        review: faker.lorem.paragraphs(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      };

      reviewsArr.push(review);
      i++;
    }

    return queryInterface.bulkInsert('Reviews', reviewsArr, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
