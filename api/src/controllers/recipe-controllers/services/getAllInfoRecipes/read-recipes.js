// require('dotenv').config()
// const { API_KEY } = process.env
const { URL_BASE } = require('../../../../utilities/paths')

const { getRecipesFromAPI } = require('./services/get-recipes-API')
const { getRecipesFromDatabase } = require('./services/get-recipes-Database')

const readRecipesAllInfo = async (query, value) => {
  let recipesFromAPI = []

  switch (query) {
    case 'name':
      // https://api.spoonacular.com/recipes/complexSearch?apiKey=32e16dcf530b4f03be6e02111512d6f6&query=pasta&addRecipeInformation=true&includeNutrition=false&number=100
      recipesFromAPI = await getRecipesFromAPI(`${URL_BASE}/complexSearch/masterRecipes?query=${value}`)
      break
    default:
      // https://api.spoonacular.com/recipes/complexSearch?apiKey=32e16dcf530b4f03be6e02111512d6f6&addRecipeInformation=true&includeNutrition=false&number=100
      recipesFromAPI = await getRecipesFromAPI(`${URL_BASE}/complexSearch/masterRecipes`)
      break
  }

  const recipesFromDatabase = await getRecipesFromDatabase()
  const allRecipes = recipesFromDatabase.concat(recipesFromAPI)

  return allRecipes
}

module.exports = readRecipesAllInfo
