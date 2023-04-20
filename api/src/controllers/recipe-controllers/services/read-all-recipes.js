require('dotenv').config()
// const { API_KEY } = process.env

const { Recipe } = require('../../../db')

const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const readAllRecipes = async () => {
  const recipesFromAPI = await getRecipesFromAPI()
  const recipesFromDatabase = await getRecipesFromDatabase()
  const allRecipes = recipesFromDatabase.concat(recipesFromAPI)

  return allRecipes
}

const getRecipesFromAPI = async () => {
  // https://api.spoonacular.com/recipes/complexSearch?apiKey=32e16dcf530b4f03be6e02111512d6f6&number=100
  // const recipes = await fetch(`${URL_BASE}/complexSearch?apiKey=${API_KEY}&number=100`)
  const recipes = await fetch(`${URL_BASE}/complexSearch`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  return recipes.results
}

const getRecipesFromDatabase = async () => {
  const recipes = await Recipe.findAll({
    attributes: ['id', 'title', 'image', 'creditsText']
  })

  return recipes
}

module.exports = readAllRecipes
