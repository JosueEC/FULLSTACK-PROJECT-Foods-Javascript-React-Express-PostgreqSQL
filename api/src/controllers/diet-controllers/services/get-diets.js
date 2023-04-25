const { Diet } = require('../../../db')

const { URL_BASE } = require('../../../utilities/paths')
const { getRecipesFromAPI } = require('../../recipe-controllers/services/getAllInfoRecipes/services/get-recipes-API')

const getDiets = async () => {
  const dietsInDatabase = await Diet.findAll()

  if (dietsInDatabase.length !== 0) return dietsInDatabase

  // https://api.spoonacular.com/recipes/complexSearch?apiKey=32e16dcf530b4f03be6e02111512d6f6&addRecipeInformation=true&includeNutrition=false&number=100
  const recipes = await getRecipesFromAPI(`${URL_BASE}/complexSearch/masterRecipes`)
  const diets = filterDietsFromRecipes(recipes)

  insertDietsInDatabase(diets)

  return diets
}

const filterDietsFromRecipes = (recipes) => {
  const diets = new Set()

  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].diets.length; j++) {
      diets.add(recipes[i].diets[j])
    }
  }

  const newFormatDiets = getDietsFromSet(diets)

  return newFormatDiets
}

const getDietsFromSet = (dietsSet) => {
  const items = []
  for (const item of dietsSet) {
    items.push(item)
  }

  return items
}

const insertDietsInDatabase = async (diets) => {
  for (let i = 0; i < diets.length; i++) {
    const nameDiet = diets[i]
    await Diet.create({ name: nameDiet })
  }
}

module.exports = getDiets
