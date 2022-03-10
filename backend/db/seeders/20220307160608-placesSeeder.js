'use strict';

// const { faker } = require('@faker-js/faker');

// const randomUserId = num => Math.floor(Math.random() * Math.floor(num) + 1);
// const randomRating = num => Math.floor(Math.random() * Math.floor(num));

module.exports = {
  up: (queryInterface, Sequelize) => {

    let demoPlace = {
      address: '19 Fisher St',
      city: 'Providence',
      state: 'Rhode Island',
      country: 'USA',
      zipcode: '02906',
      price: 123,
      rating: 5,
      userId: 1
    };

    return queryInterface.bulkInsert('Places', [demoPlace], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Places', null, {});

  }
};
