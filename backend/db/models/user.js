'use strict';

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING.BINARY,
  });

  User.associate = function (models) {
    User.hasMany(models.Places, { foreignKey: 'userId' });
    User.hasMany(models.Reviews, { foreignKey: 'userId' });
    User.hasMany(models.Favorites, { foreignKey: 'userId' });
    User.hasMany(models.Bookings, { foreignKey: 'userId' });
  };

  return User;
};
