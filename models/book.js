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
      Book.belongsTo(models.User, {
        foreignKey: 'userId' 
      })
      Book.hasMany(models.Note, {
        foreignKey: 'bookId'
      })
    }
  };
  Book.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        field: 'userId',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Book',
    tableName: 'books'
  });
  return Book;
};