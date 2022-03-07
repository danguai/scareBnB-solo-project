'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    placeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};