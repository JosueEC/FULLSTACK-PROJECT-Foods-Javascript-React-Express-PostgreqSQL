const { DataTypes } = require('sequelize')

module.exports = (database) => {
  database.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    healthScore: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    preparationMinutes: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    creaditsText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    servings: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    timestamps: false
  })
}
