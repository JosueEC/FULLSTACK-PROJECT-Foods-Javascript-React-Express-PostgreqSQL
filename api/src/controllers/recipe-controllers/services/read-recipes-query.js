const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const readRecipesQuery = async (name) => {
  // const recipes = await fetch(`${URL_BASE}/complexSearch?apiKey=32e16dcf530b4f03be6e02111512d6f6&query=${name}&number=100`)
  const recipes = await fetch(`${URL_BASE}/complexSearch?query=${name}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  return recipes
}

module.exports = readRecipesQuery
