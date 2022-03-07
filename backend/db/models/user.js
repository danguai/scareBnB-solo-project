'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

console.log('VALIDATOR', Validator.isNumeric);

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING.BINARY,
  });

  // User.signup = async function ({ firstName, lastName, username, email, password }) {
  //   const hashedPassword = bcrypt.hashSync(password);
  //   const user = await User.create({
  //     firstName,
  //     lastName,
  //     username,
  //     email,
  //     hashedPassword
  //   });
  //   return await User.scope('currentUser').findByPk(user.id);
  // };

  // User.login = async function ({ credential, password }) {
  //   const { Op } = require('sequelize');
  //   const user = await User.scope('loginUser').findOne({
  //     where: {
  //       [Op.or]: {
  //         username: credential,
  //         email: credential
  //       }
  //     }
  //   });
  //   if (user && user.validatePassword(password)) {
  //     return await User.scope('currentUser').findByPk(user.id);
  //   }
  // };

  User.associate = function (models) {
    // associations can be defined here
  };

  // User.prototype.toSafeObject = function () {
  //   const { id, username, email } = this;
  //   return { id, username, email };
  // };

  // User.prototype.validatePassword = function (password) {
  //   return bcrypt.compareSync(password, this.hashedPassword.toString());
  // };

  // User.getCurrentUserById = async function (id) {
  //   return await User.scope('currentUser').findByPk(id);
  // };

  return User;
};
