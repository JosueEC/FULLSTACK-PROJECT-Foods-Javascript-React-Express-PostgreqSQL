require('dotenv').config()
const { Op } = require('sequelize')
// const { API_KEY } = process.env

const { Recipe } = require('../../../db')

const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const readRecipesQuery = async (name) => {
  const recipesFromDatabase = await getRecipesFromDatabase(name)
  const recipesFromAPI = await getRecipesFromAPI(name)
  const allRecipes = recipesFromDatabase.concat(recipesFromAPI.results)

  return allRecipes
}

async function getRecipesFromAPI (name) {
  // https://api.spoonacular.com/recipes/complexSearch?apiKey=32e16dcf530b4f03be6e02111512d6f6&query={name}&number=100
  // const recipes = await fetch(`${URL_BASE}/complexSearch?apiKey=${API_KEY}&query=${name}&number=100`)
  const recipes = await fetch(`${URL_BASE}/complexSearch?query=${name}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  return recipes
}

async function getRecipesFromDatabase (name) {
  const query = name.toUpperCase()
  const recipes = Recipe.findAll({
    where: {
      title: {
        [Op.iLike]: `%${query}%`
      }
    },
    attributes: ['id', 'title', 'image']
  })
  return recipes
}

module.exports = readRecipesQuery
