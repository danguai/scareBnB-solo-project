'use strict';

module.exports = (sequelize, DataTypes) => {

  const Image = sequelize.define('Image', {
    placeId: DataTypes.INTEGER
  }, {});

  Image.associate = function (models) {
    Image.belongsTo(models.Place, {
      foreignKey: 'placeId', onDelete: "cascade", foreignKeyConstraint: true
    });

  };
  return Image;
};
