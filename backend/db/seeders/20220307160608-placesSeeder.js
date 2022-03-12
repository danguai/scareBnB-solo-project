'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let demoPlace = {
      title: 'Old Man’s Hotel',
      address: '74 Dana St',
      city: 'Providence',
      state: 'Rhode Island',
      country: 'USA',
      zipcode: '02906',
      url_image_01: 'https://media.istockphoto.com/photos/haunted-house-picture-id489181524?b=1&k=20&m=489181524&s=170667a&w=0&h=4AXe9oLWlSCMYV-x4faU21Jqd_uH62CAm3ApaNQS6jQ=',
      url_image_02: 'https://media.istockphoto.com/photos/old-haunted-abandoned-mansion-in-creepy-night-forest-with-cold-fog-picture-id1327837669?b=1&k=20&m=1327837669&s=170667a&w=0&h=YYoqXF7qN9SgJUsaIpALnmkZD0wd8HBl-Kld80dMf6I=',
      url_image_03: 'https://media.istockphoto.com/photos/house-in-bad-summer-thunderstorm-picture-id178988183?b=1&k=20&m=178988183&s=170667a&w=0&h=jE9PbUFafm1lrpeI3c5QcXGvDOowxpOJO6oWmPaqR-Q=',
      url_image_04: 'https://media.istockphoto.com/photos/children-in-ghost-costumes-trick-or-treat-at-haunted-house-picture-id108309587?b=1&k=20&m=108309587&s=170667a&w=0&h=EiGdntmAuUc1oHle7Y_vIryC4PDBbJ20nBM99TR5a0M=',
      url_image_05: 'https://media.istockphoto.com/photos/dark-wooden-cellar-door-open-at-bottom-of-old-stone-stairs-bright-sun-picture-id1302605520?b=1&k=20&m=1302605520&s=170667a&w=0&h=mtmqeHeg3ULgT3AXkDC5RwHGMF2ewafjY6DVwSGhqOM=',
      amenities_01: 'Fog all day and night',
      amenities_02: 'Full Moon',
      amenities_03: 'Dial-up',
      amenities_04: 'Possessed children',
      amenities_05: 'Outdoor Bathroom',
      price: 100,
      rating: 3,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    let dbPlace = {
      title: 'Bell Witch Horror',
      address: '45 Fisher St',
      city: 'Florida',
      state: 'Miamie',
      country: 'USA',
      zipcode: '11246',
      url_image_01: 'https://media.istockphoto.com/photos/abandoned-haunted-house-refuge-of-spirits-moonlit-night-3d-picture-id1280975491?b=1&k=20&m=1280975491&s=170667a&w=0&h=in3YkMi5iKxivW84PYlUSuwjGeNJod6FcNJY4PbtTP8=',
      url_image_02: 'https://media.istockphoto.com/photos/the-ghost-house-picture-id153888397?b=1&k=20&m=153888397&s=170667a&w=0&h=xquc5amR8G6wduezLzP27M8rrPL33DuL8yXtX0dPL4A=',
      url_image_03: 'https://images.unsplash.com/photo-1634582709093-cd632136e110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGF1bnRpbmclMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      url_image_04: 'https://images.unsplash.com/photo-1633555690973-b736f84f3c1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGF1bnRpbmclMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      url_image_05: 'https://images.unsplash.com/photo-1568865416495-eadf11159a2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGF1bnRpbmclMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      amenities_01: 'Fog all day and night',
      amenities_02: 'Full Moon',
      amenities_03: 'Dial-up',
      amenities_04: 'Possessed children',
      amenities_05: 'Outdoor Bathroom',
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
