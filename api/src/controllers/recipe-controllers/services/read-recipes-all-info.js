require('dotenv').config()
// const { API_KEY } = process.env

const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const { formatArrayRecipes } = require('./format-recipe')

const readRecipesAllInfo = async () => {
  // https://api.spoonacular.com/recipes/complexSearch?apiKey=32e16dcf530b4f03be6e02111512d6f6&query=pasta&addRecipeInformation=true&includeNutrition=false&number=100
  // https://api.spoonacular.com/recipes/complexSearch?apiKey=32e16dcf530b4f03be6e02111512d6f6&addRecipeInformation=true&includeNutrition=false&number=100
  // const recipes = await fetch(`${URL_BASE}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&includeNutrition=false&number=100`)
  const recipes = await fetch(`${URL_BASE}/complexSearch/masterRecipes`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  const newFormat = formatArrayRecipes(recipes)

  return newFormat
}

module.exports = readRecipesAllInfo
