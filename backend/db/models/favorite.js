'use strict';

module.exports = (sequelize, DataTypes) => {

  const Favorite = sequelize.define('Favorite', {
    placeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});

  Favorite.associate = function (models) {
    Favorite.belongsTo(models.User, {
      foreignKey: 'userId', onDelete: "cascade", foreignKeyConstraint: true
    });

    Favorite.belongsTo(models.Place, {
      foreignKey: 'placeId', onDelete: "cascade", foreignKeyConstraint: true
    });
  };
  return Favorite;
};
