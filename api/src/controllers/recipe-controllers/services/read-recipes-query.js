const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const readRecipesQuery = async (query) => {
  const recipes = await fetch(`${URL_BASE}/complexSearch?query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  return recipes
}

module.exports = readRecipesQuery
