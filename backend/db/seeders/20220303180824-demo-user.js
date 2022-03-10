'use strict';

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

    let dbUser = {
      firstName: 'Daniel',
      lastName: 'Blanco',
      email: 'db@gmail.com',
      username: 'danguai',
      imageProfile: '',
      hashedPassword: '$2a$12$b56Z0fkkc5xeK6jbRFmQquYBG5hnc0ih/BCbblr7Exx/wxdp0N7ui',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return queryInterface.bulkInsert('Users', [demoUser, dbUser], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
