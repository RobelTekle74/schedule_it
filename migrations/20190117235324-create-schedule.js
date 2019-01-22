'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('schedule', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // id: {
      //   type: Sequelize.INTEGER
      // },
      monday: {
        type: Sequelize.TIME
      },
      tuesday: {
        type: Sequelize.TIME
      },
      wednesday: {
        type: Sequelize.TIME
      },
      thursday: {
        type: Sequelize.TIME
      },
      friday: {
        type: Sequelize.TIME
      },
      saturday: {
        type: Sequelize.TIME
      },
      sunday: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('schedules');
  }
};