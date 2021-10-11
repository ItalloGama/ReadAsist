'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tip.init(
    {
      tipName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tip: {
        type: DataTypes.STRING,
        allowNull: false
      },
      img: {
        type: DataTypes.STRING,
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