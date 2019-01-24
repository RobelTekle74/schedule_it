'use strict';
module.exports = (sequelize, DataTypes) => {
  const schedule = sequelize.define('schedule', {
    // id: DataTypes.INTEGER,
    monday: DataTypes.TIME,
    tuesday: DataTypes.TIME,
    wednesday: DataTypes.TIME,
    thursday: DataTypes.TIME,
    friday: DataTypes.TIME,
    saturday: DataTypes.TIME,
    sunday: DataTypes.TIME,
  }, {});
  schedule.associate = function(models) {
    // associations can be defined here
    schedule.belongsTo(models.user)
  };
  return schedule;
};