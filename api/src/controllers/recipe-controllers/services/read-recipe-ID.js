require('dotenv').config()
// const { API_KEY } = process.env

const { Recipe, Diet } = require('../../../db')
const { formatSingleRecipe } = require('./format-recipe')

const { URL_BASE } = require('../../../utilities/paths')
const fetch = require('node-fetch')

const readRecipeID = async (idRecipe) => {
  const infoRecipe = validarId(idRecipe)
    ? await getInfoRecipeFromDatabase(idRecipe)
    : await getInfoRecipeFromAPI(idRecipe)

  return infoRecipe
}

function validarId (id) {
  const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
  return regex.test(id)
}

async function getInfoRecipeFromAPI (idRecipeAPI) {
  // https://api.spoonacular.com/recipes/${idRecipeAPI}/information?apiKey=32e16dcf530b4f03be6e02111512d6f6&includeNutrition=false
  // const recipe = await fetch(`${URL_BASE}/${idRecipeAPI}/information?apiKey=${API_KEY}&includeNutrition=false`)
  const recipe = await fetch(`${URL_BASE}/${idRecipeAPI}/information`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  const newFormatRecipe = formatSingleRecipe(recipe)

  return newFormatRecipe
}

async function getInfoRecipeFromDatabase (idRecipeDatabase) {
  const recipe = await Recipe.findByPk(idRecipeDatabase, {
    include: {
      model: Diet,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  })

  const newFormat = formatRecipeDatabase(recipe)
  return newFormat
}

const formatRecipeDatabase = (recipe) => {
  const diets = formatRecipeDiets(recipe.Diets)

  const newFormat = {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    summary: recipe.summary,
    healthScore: recipe.healthScore,
    instructions: recipe.instructions,
    ingredients: recipe.ingredients,
    diets,
    preparationMinutes: recipe.preparationMinutes,
    servings: recipe.servings,
    creditsText: recipe.creditsText
  }

  return newFormat
}

const formatRecipeDiets = (arrayDiets) => {
  const newFormat = []

  for (let i = 0; i < arrayDiets.length; i++) {
    newFormat.push(arrayDiets[i].name)
  }

  return newFormat
}

module.exports = readRecipeID
