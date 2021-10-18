'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    static associate(models) {
    }
  };
  Forum.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, 
  {
    sequelize,
    modelName: 'Forum',
    tableName: 'forums'
  });
  return Forum;
};