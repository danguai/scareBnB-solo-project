'use strict';

module.exports = (sequelize, DataTypes) => {

  const Place = sequelize.define('Place', {
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    url_image_01: DataTypes.TEXT,
    url_image_02: DataTypes.TEXT,
    url_image_03: DataTypes.TEXT,
    url_image_04: DataTypes.TEXT,
    url_image_05: DataTypes.TEXT,
    amenities_01: DataTypes.TEXT,
    amenities_02: DataTypes.TEXT,
    amenities_03: DataTypes.TEXT,
    amenities_04: DataTypes.TEXT,
    amenities_05: DataTypes.TEXT,
    price: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});

  Place.associate = function (models) {
    Place.belongsTo(models.User, { foreignKey: 'userId', onDelete: "cascade", foreignKeyConstraint: true });

    Place.hasMany(models.Review, { foreignKey: 'placeId' });
  };
  return Place;
};
