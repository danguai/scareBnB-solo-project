'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    placeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};