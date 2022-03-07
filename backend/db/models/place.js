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

  Place.associate = function (models) {
    Place.belongsTo(models.Users, { foreignKey: 'userId' });

    Place.hasMany(models.Bookings, { foreignKey: 'placeId' });
    Place.hasMany(models.Reviews, { foreignKey: 'placeId' });

    Place.hasOne(models.Favorites, { foreignKey: 'placeId' });
  };
  return Place;
};
