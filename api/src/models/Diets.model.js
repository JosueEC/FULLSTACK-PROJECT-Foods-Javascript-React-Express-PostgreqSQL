const { DataTypes } = require('sequelize')

module.exports = (database) => {
  database.define('Diet',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  })
}