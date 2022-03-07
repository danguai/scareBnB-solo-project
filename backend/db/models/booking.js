'use strict';

module.exports = (sequelize, DataTypes) => {

  const Booking = sequelize.define('Booking', {
    placeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});

  Booking.associate = function (models) {
    Booking.belongsTo(models.Users, { foreignKey: 'userId' });

    Booking.belongsTo(models.Places, { foreignKey: 'placeId' });
  };
  return Booking;
};
