'use strict';

module.exports = (sequelize, DataTypes) => {

  const Place = sequelize.define('Place', {
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    price: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});

  Place.associate = function (models) {
    Place.belongsTo(models.User, { foreignKey: 'userId', onDelete: "cascade", foreignKeyConstraint: true });

    Place.hasMany(models.Review, { foreignKey: 'placeId' });
  };
  return Place;
};
