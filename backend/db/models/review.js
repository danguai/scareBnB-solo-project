'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    placeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: 'userId', onDelete: "cascade", foreignKeyConstraint: true });

    Review.belongsTo(models.Place, { foreignKey: 'placeId', onDelete: "cascade", foreignKeyConstraint: true });

  };
  return Review;
};
