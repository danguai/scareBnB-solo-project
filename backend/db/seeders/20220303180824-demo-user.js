'use strict';

const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');

const randomIndex = num => Math.floor(Math.random() * Math.floor(num));

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

    let usersArr = [demoUser];

    let imagesProfile = [
      '', '',
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar()
    ];

    let i = 0;
    while (i < 20) {
      const user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        imageProfile: imagesProfile[randomIndex(5)],
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      };
      usersArr.push(user);
      i++;
    }
    return queryInterface.bulkInsert('Users', usersArr, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
