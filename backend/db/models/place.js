'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Place.associate = function(models) {
    // associations can be defined here
  };
  return Place;
};