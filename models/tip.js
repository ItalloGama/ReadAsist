'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tip extends Model {
    static associate(models) {
    }
  };
  Tip.init(
    {
      tipName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tip: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: false
      },
  }, 
  {
    sequelize,
    modelName: 'Tip',
    tableName: 'tips'
  }
  );
  return Tip;
};