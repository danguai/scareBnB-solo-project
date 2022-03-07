'use strict';

module.exports = (sequelize, DataTypes) => {

  const Places = sequelize.define('Places', {
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});

  Places.associate = function(models) {
        Places.belongsTo(models.User, { foreignKey: 'userId'})
  };

  return Places;
};
