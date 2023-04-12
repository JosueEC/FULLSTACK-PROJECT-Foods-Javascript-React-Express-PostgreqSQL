const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const readAllRecipes = async () => {
  const recipes = await fetch(`${URL_BASE}/complexSearch`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  return recipes
}

module.exports = readAllRecipes
