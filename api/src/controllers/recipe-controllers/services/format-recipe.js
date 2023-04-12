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

const formatElementArrayRecipe = (recipe) => {
  const diets = formatDiets(recipe)

  const newFormat = {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    healthScore: recipe.healthScore,
    diets,
    preparationMinutes: recipe.preparationMinutes,
    servings: recipe.servings,
    creditsText: recipe.creditsText
  }
  return newFormat
}

const formatArrayRecipes = (arrayRecipes) => {
  const newFormat = []

  for (let i = 0; i < arrayRecipes.results.length; i++) {
    const recipe = formatElementArrayRecipe(arrayRecipes.results[i])
    newFormat.push(recipe)
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
  formatSingleRecipe,
  formatArrayRecipes
}
