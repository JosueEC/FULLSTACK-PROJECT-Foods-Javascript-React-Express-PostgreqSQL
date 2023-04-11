const { DataTypes } = require('sequelize')

module.exports = (database) => {
  database.define('Diets',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}