// Agregar una funcion para que verifique si se busca una recipe de
// la API o de nuestra BD

// const Recipe = require('../../../db')
const { formatSingleRecipe } = require('./format-recipe')

const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const readRecipeID = async (idRecipe) => {
  // const recipe = await fetch(`${URL_BASE}/${idRecipe}/information?apiKey=32e16dcf530b4f03be6e02111512d6f6&includeNutrition=false`)
  const recipe = await fetch(`${URL_BASE}/${idRecipe}/information`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  const newFormatRecipe = formatSingleRecipe(recipe)

  return newFormatRecipe
}

module.exports = readRecipeID
