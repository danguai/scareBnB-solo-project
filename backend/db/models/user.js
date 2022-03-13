'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    imageProfile: DataTypes.TEXT,
    hashedPassword: DataTypes.STRING.BINARY,
  },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
        }
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] }
        },
        loginUser: {
          attributes: {}
        }
      }
    });

  User.login = async function ({ username, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        username
      }
    });

    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ firstName, lastName, username, email, imageProfile, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      imageProfile,
      hashedPassword
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  User.associate = function (models) {
    User.hasMany(models.Place, { foreignKey: 'userId' });
    User.hasMany(models.Review, { foreignKey: 'userId' });
  };

  User.prototype.toSafeObject = function () { // remember, this cannot be an arrow function
    const { id, username, email, imageProfile } = this; // context will be the User instance
    return { id, username, email, imageProfile };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.prototype.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  return User;
};
