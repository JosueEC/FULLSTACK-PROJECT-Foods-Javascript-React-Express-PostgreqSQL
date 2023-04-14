const { Recipe } = require('../../../db')

const createRecipeInDatabase = async (newDataRecipe) => {
  const {
    title,
    image,
    summary,
    healthScore,
    instructions,
    ingredients,
    preparationMinutes,
    servings,
    creditsText,
    likes,
    diets
  } = newDataRecipe
  const adaptedTitle = title.toUpperCase()
  const createdRecipe = await Recipe.create(
    {
      adaptedTitle,
      image,
      summary,
      healthScore,
      instructions,
      ingredients,
      preparationMinutes,
      servings,
      creditsText,
      likes
    }
  )

  createdRecipe.addDiets(diets)

  return createdRecipe
}

module.exports = createRecipeInDatabase
