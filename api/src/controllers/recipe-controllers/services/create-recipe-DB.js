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
  const adaptedTitle = title.toLowerCase()
  const adaptedCreditsText = creditsText.toLowerCase()

  const createdRecipe = await Recipe.create(
    {
      title: adaptedTitle,
      image,
      summary,
      healthScore,
      instructions,
      ingredients,
      preparationMinutes,
      servings,
      creditsText: adaptedCreditsText,
      likes
    }
  )

  createdRecipe.addDiets(diets)

  return createdRecipe
}

module.exports = createRecipeInDatabase
