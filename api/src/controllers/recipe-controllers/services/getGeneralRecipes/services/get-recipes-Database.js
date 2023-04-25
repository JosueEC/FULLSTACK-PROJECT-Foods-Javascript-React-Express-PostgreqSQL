const { Recipe } = require('../../../../../db')

const getRecipesFromDatabase = async () => {
  const recipes = await Recipe.findAll({
    attributes: ['id', 'title', 'image']
  })

  return recipes
}

module.exports = {
  getRecipesFromDatabase
}
