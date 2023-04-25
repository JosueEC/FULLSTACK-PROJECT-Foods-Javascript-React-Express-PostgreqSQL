const { getRecipesFromAPI } = require('./services/get-recipes-API')
const { getRecipesFromDatabase } = require('./services/get-recipes-Database')

const { URL_BASE } = require('../../../../utilities/paths')
// require('dotenv').config()
// const { API_KEY } = process.env

const readAllRecipes = async (query, value) => {
  let recipesFromAPI = []
  let recipesFromDatabase = []
  switch (query) {
    case 'name':
      // https://api.spoonacular.com/recipes/complexSearch?apiKey=32e16dcf530b4f03be6e02111512d6f6&query={name}&number=100
      // const recipes = await fetch(`${URL_BASE}/complexSearch?apiKey=${API_KEY}&query=${name}&number=100`)
      recipesFromAPI = await getRecipesFromAPI(`${URL_BASE}/complexSearch?name=${value}`)
      recipesFromDatabase = await getRecipesFromDatabase(query, value)
      break
    default:
      // https://api.spoonacular.com/recipes/complexSearch?apiKey=32e16dcf530b4f03be6e02111512d6f6&number=100
      // const recipes = await fetch(`${URL_BASE}/complexSearch?apiKey=${API_KEY}&number=100`)
      recipesFromAPI = await getRecipesFromAPI(`${URL_BASE}/complexSearch`)
      recipesFromDatabase = await getRecipesFromDatabase()
      break
  }

  const allRecipes = recipesFromDatabase.concat(recipesFromAPI)

  return allRecipes
}

module.exports = readAllRecipes
