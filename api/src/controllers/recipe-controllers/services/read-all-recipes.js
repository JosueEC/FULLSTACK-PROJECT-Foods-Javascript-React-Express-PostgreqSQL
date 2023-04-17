require('dotenv').config()
// const { API_KEY } = process.env

const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const readAllRecipes = async () => {
  // const recipes = await fetch(`${URL_BASE}/complexSearch?${API_KEY}&number=100`)
  const recipes = await fetch(`${URL_BASE}/complexSearch`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  return recipes.results
}

module.exports = readAllRecipes
