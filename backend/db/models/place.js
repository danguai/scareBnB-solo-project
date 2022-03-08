'use strict';

module.exports = (sequelize, DataTypes) => {

  const Place = sequelize.define('Place', {
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});

  Place.associate = function (models) {
    Place.belongsTo(models.User, { foreignKey: 'userId' });

    Place.hasMany(models.Booking, { foreignKey: 'placeId' });
    Place.hasMany(models.Review, { foreignKey: 'placeId' });

    Place.hasOne(models.Favorite, { foreignKey: 'placeId' });
  };
  return Place;
};
