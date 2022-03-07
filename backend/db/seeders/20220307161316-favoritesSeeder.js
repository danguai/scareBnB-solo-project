'use strict';

const { faker } = require('@faker-js/faker');

const randomId = num => Math.floor(Math.random() * Math.floor(num) + 1);

module.exports = {
  up: (queryInterface, Sequelize) => {
    let favoritesArr = [];

    let i = 0;
    while (i < 10) {
      const favorite = {
        userId: randomId(15),
        placeId: randomId(10),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      };

      favoritesArr.push(favorite);
      i++;
    }

    return queryInterface.bulkInsert('Favorites', favoritesArr, {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Favorites', null, {});

  }
};
