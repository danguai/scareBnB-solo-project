'use strict';

// const { faker } = require('@faker-js/faker');

// const randomId = num => Math.floor(Math.random() * Math.floor(num) + 1)

module.exports = {
  up: (queryInterface, Sequelize) => {
    // let bookingsArr = [];

    // let i = 0;
    // while (i < 20) {
    //   const booking = {
    //     userId: randomId(15),
    //     placeId: randomId(10),
    //     startDate: faker.date.betweens(),
    //     endDate: faker.date.betweens('2015-01-01', '2020-01-05'),
    //     createdAt: faker.date.past(),
    //     updatedAt: faker.date.recent(),
    //   };

    //   bookingsArr.push(booking);
    //   i++;
    // }
    return queryInterface.bulkInsert('Bookings', [], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Bookings', null, {});

  }
};
