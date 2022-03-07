'use strict';

module.exports = (sequelize, DataTypes) => {

  const Image = sequelize.define('Image', {
    placeId: DataTypes.INTEGER
  }, {});

  Image.associate = function (models) {
    Image.belongsTo(models.Places, { foreignKey: 'placeId' });

  };
  return Image;
};
