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
    pictureCardId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      field: 'pictureCardId',
      references: {
        model: 'picture_cards',
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