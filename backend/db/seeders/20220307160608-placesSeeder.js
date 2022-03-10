'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let demoPlace = {
      address: '74 Dana St',
      city: 'Providence',
      state: 'Rhode Island',
      country: 'USA',
      zipcode: '02906',
      price: 100,
      rating: 3,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    let dbPlace = {
      address: '19 Fisher St',
      city: 'Providence',
      state: 'Rhode Island',
      country: 'USA',
      zipcode: '02906',
      price: 123,
      rating: 5,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return queryInterface.bulkInsert('Places', [demoPlace, dbPlace], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Places', null, {});

  }
};
