'use strict';

const { faker } = require('@faker-js/faker');

const randomRating = num => Math.floor(Math.random() * Math.floor(num));

module.exports = {
  up: (queryInterface, Sequelize) => {
    let placesArr = [];

    let i = 0;
    while (i < 20) {
      const place = {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
        zipcode: faker.address.zipCode().split('').slice(0, 5).join(''),
        price: faker.commerce.price(),
        rating: randomRating(5),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      };
      placesArr.push(place);
      i++;
    }
    return queryInterface.bulkInsert('Places', placesArr, {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Places', null, {});

  }
};
