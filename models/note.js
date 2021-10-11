'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Note.belongsTo(models.User, { 
        foreignKey: 'userId' 
      })
      Note.belongsTo(models.Book, { 
        foreignKey: 'bookId' 
      })
    }
  };
  Note.init({
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      field: 'userId',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    bookId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      field: 'bookId',
      references: {
        model: 'books',
        key: 'id'
      }
    },
    note: {
      type: DataTypes.STRING
    }
  }, 
  {
    sequelize,
    modelName: 'Note',
    tableName: 'notes'
  });
  return Note;
};