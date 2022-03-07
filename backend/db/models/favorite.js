'use strict';

module.exports = (sequelize, DataTypes) => {

  const Favorite = sequelize.define('Favorite', {
    placeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});

  Favorite.associate = function (models) {
    Favorite.belongsTo(models.Users, { foreignKey: 'userId' });

    Favorite.belongsTo(models.Places, { foreignKey: 'placeId' });
  };
  return Favorite;
};