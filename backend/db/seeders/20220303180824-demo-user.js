'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let demoUser = {
      firstName: 'Fred',
      lastName: 'Kruger',
      email: 'krugerlovesyou@gmail.com',
      username: 'freddy',
      imageProfile: 'https://images.unsplash.com/photo-1602737337930-b4f775f99f77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZGR5JTIwa3J1ZWdlcnxlbnwwfHwwfHw3D&auto=format&fit=crop&w=500&q=60',
      hashedPassword: '$2a$12$b56Z0fkkc5xeK6jbRFmQquYBG5hnc0ih/BCbblr7Exx/wxdp0N7ui',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    let dbUser = {
      firstName: 'Daniel',
      lastName: 'Blanco',
      email: 'db@d-blanco.com',
      username: 'danguai',
      imageProfile: 'https://ca.slack-edge.com/T03GU501J-U02GGQM0NQ1-e1233ba490b7-48',
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
