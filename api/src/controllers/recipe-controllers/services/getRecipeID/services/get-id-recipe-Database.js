const { Recipe, Diet } = require('../../../../../db')

const getInfoRecipeFromDatabase = async (idRecipeDatabase) => {
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

module.exports = {
  getInfoRecipeFromDatabase
}
