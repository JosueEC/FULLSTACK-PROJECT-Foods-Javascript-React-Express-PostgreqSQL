// Agregar una funcion para que verifique si se busca una recipe de
// la API o de nuestra BD

require('dotenv').config()
// const { API_KEY } = process.env

// const Recipe = require('../../../db')
const { formatSingleRecipe } = require('./format-recipe')

const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const readRecipeID = async (idRecipe) => {
  // const recipe = await fetch(`${URL_BASE}/${idRecipe}/information?${API_KEY}&includeNutrition=false`)
  const recipe = await fetch(`${URL_BASE}/${idRecipe}/information`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  const newFormatRecipe = formatSingleRecipe(recipe)

  return newFormatRecipe
}

module.exports = readRecipeID
