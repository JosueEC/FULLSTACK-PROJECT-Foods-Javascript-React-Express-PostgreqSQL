const { DataTypes } = require('sequelize');

module.exports = (database) => {
  database.define('Recipe', {
    id: {},
    title: {},
    image: {},
    summary: {},
    healthScore: {},
    instructions: {},
    ingredients: {},
    preparationMinutes: {},
    creaditsText: {},
    servings: {},
    favorite: {},
    likes: {}
  });
};
