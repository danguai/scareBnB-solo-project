'use strict';

const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {

    let demoUser = {
      firstName: 'Fred',
      lastName: 'Kruger',
      email: 'krugerlovesyou@gmail.com',
      userName: 'freddy',
      profileUrl: null,
      hashedPassword: '$2a$12$b56Z0fkkc5xeK6jbRFmQquYBG5hnc0ih/BCbblr7Exx/wxdp0N7ui',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    let usersArr = [demoUser];

    let profilesImages = [
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
        userName: faker.internet.userName(),
        profileUrl: profilesImages[randomIndex(5)],
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      };
      usersArr.push(user);
      i++;
    }
    return queryInterface.bulkInsert('Users', [], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['freddy'] }
    }, {});
  }
};
