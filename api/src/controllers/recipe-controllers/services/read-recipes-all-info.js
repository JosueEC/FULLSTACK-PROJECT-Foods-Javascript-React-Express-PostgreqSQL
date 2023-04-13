require('dotenv').config()
// const { API_KEY } = process.env

const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const { formatArrayRecipes } = require('./format-recipe')

const readRecipesAllInfo = async () => {
  // const recipes = await fetch(`${URL_BASE}/complexSearch?${API_KEY}&addRecipeInformation=true&includeNutrition=false&number=100`)
  const recipes = await fetch(`${URL_BASE}/complexSearch/masterRecipes`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  const newFormat = formatArrayRecipes(recipes)

  return newFormat
}

module.exports = readRecipesAllInfo
