// const Recipe = require('../../../db')

const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const readRecipeID = async (idRecipe) => {
  const recipe = await fetch(`${URL_BASE}/${idRecipe}/information`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  return recipe
}

module.exports = readRecipeID