'use strict';

module.exports = (sequelize, DataTypes) => {

  const Booking = sequelize.define('Booking', {
    placeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});

  Booking.associate = function (models) {
    Booking.belongsTo(models.User, {
      foreignKey: 'userId', onDelete: "cascade", foreignKeyConstraint: true
    });

    Booking.belongsTo(models.Place, {
      foreignKey: 'placeId', onDelete: "cascade", foreignKeyConstraint: true
    });
  };
  return Booking;
};
