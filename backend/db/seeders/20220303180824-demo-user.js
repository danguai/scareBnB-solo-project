'use strict';

// const { faker } = require('@faker-js/faker');å;

// const randomIndex = num => Math.floor(Math.random() * Math.floor(num));


module.exports = {
  up: (queryInterface, Sequelize) => {

    let demoUser = {
      firstName: 'Fred',
      lastName: 'Kruger',
      email: 'krugerlovesyou@gmail.com',
      username: 'freddy',
      imageProfile: '',
      hashedPassword: '$2a$12$b56Z0fkkc5xeK6jbRFmQquYBG5hnc0ih/BCbblr7Exx/wxdp0N7ui',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return queryInterface.bulkInsert('Users', [demoUser], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
