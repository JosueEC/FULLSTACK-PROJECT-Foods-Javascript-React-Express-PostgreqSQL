require('dotenv').config()
// const { API_KEY } = process.env

const { URL_BASE } = require('../../../../../utilities/paths')
const fetch = require('node-fetch')

const getInfoRecipeFromAPI = async (idRecipeAPI) => {
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

const formatSingleRecipe = (recipe) => {
  const ingredients = formatIngredients(recipe.extendedIngredients)
  const diets = formatDiets(recipe)

  const newFormat = {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    summary: recipe.summary,
    healthScore: recipe.healthScore,
    instructions: recipe.instructions,
    ingredients,
    diets,
    preparationMinutes: recipe.preparationMinutes,
    servings: recipe.servings,
    creditsText: recipe.creditsText
  }

  return newFormat
}

const formatIngredients = (arrayIngredients) => {
  const newFormat = []

  for (let i = 0; i < arrayIngredients.length; i++) {
    newFormat.push(arrayIngredients[i].name)
  }

  const joinIngredients = newFormat.join(', ')

  return joinIngredients
}

const formatDiets = ({ diets, vegetarian, vegan, glutenFree }) => {
  if (vegetarian) {
    if (!diets.includes('vegetarian')) diets.push('vegetarian')
  }

  if (vegan) {
    if (!diets.includes('vegan')) diets.push('vegan')
  }

  if (glutenFree) {
    if (!diets.includes('gluten free')) diets.push('glutenFree')
  }

  return diets
}

module.exports = {
  getInfoRecipeFromAPI
}
