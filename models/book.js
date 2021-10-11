'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init(
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      img: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Book',
    tableName: 'books'
  });
  return Book;
};