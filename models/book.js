'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
    }
  };
  Book.init(
    {
      description: {
        type: DataTypes.TEXT,
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