require('dotenv').config()
// const { API_KEY } = process.env

const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const readRecipesQuery = async (name) => {
  // const recipes = await fetch(`${URL_BASE}/complexSearch?${API_KEY}&query=${name}&number=100`)
  const recipes = await fetch(`${URL_BASE}/complexSearch?query=${name}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  return recipes
}

module.exports = readRecipesQuery
