const { getRecipesFromAPI } = require('./services/get-recipes-API')
const { getRecipesFromDatabase } = require('./services/get-recipes-Database')

const readAllRecipes = async () => {
  const recipesFromAPI = await getRecipesFromAPI()
  const recipesFromDatabase = await getRecipesFromDatabase()
  const allRecipes = recipesFromDatabase.concat(recipesFromAPI)

  return allRecipes
}

module.exports = readAllRecipes
