const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const { formatArrayRecipes } = require('./format-recipe')

const readRecipesAllInfo = async () => {
  const recipes = await fetch(`${URL_BASE}/complexSearch/masterRecipes`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  const newFormat = formatArrayRecipes(recipes)

  return newFormat
}

module.exports = readRecipesAllInfo
