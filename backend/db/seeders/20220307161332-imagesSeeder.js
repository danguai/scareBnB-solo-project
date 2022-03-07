'use strict';


const { faker } = require('@faker-js/faker');

// const randomId = num => Math.floor(Math.random() * Math.floor(num) + 1);

// const randomNumImg = num => Math.floor(Math.random() * Math.floor(num));

module.exports = {
  up: (queryInterface, Sequelize) => {
    // let imagesArr = [];

    // const numImg = () => {
    //   randomNumImg(10);
    //   for (let i = 0; i > numImg; i++) {

    //   }
    // };


    // let j = 0;
    // while (j < 10) {
    //   const image = {
    //     placeId: randomId(10),
    //     images: [],
    //     createdAt: faker.date.past(),
    //     updatedAt: faker.date.recent(),
    //   };

    //   imagesArr.push(image);
    //   j++;
    // }
    return queryInterface.bulkInsert('Images', [{
      placeId: 2,
      images: 'https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/05/GettyImages-1158031584-e1592292359511-676x480.jpg',
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Images', null, {});

  }
};
