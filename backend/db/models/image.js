'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    placeId: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};