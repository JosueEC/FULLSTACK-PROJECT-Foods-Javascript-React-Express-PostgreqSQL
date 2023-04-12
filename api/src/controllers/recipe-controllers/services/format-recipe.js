// Refactorizar esta funcion para que pueda trabajar con varias
// recipes en 1 arreglo y tambien cuando solo sea una Recipe

const formatRecipe = (recipe) => {
  const ingredients = formatIngredients(recipe.extendedIngredients)

  const newFormat = {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    summary: recipe.summary,
    healthScore: recipe.healthScore,
    instructions: recipe.instructions,
    ingredients,
    preparationMinutes: recipe.preparationMinutes,
    servings: recipe.servings,
    creditsText: recipe.creditsText,
    likes: recipe.likes
  }

  return newFormat
}

const formatIngredients = (ingredients) => {
  const newFormat = []

  for (let i = 0; i < ingredients.length; i++) {
    newFormat.push({
      name: ingredients[i].name,
      amount: ingredients[i].amount,
      unit: ingredients[i].unit
    })
  }

  return newFormat
}

module.exports = formatRecipe
