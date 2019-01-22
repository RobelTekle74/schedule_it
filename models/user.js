'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    // id: { 
    //   type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true 
    // },
    role: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};