const fetch = require('node-fetch')

const getRecipesFromAPI = async (URL) => {
  const recipes = await fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  const newFormat = formatArrayRecipes(recipes.results)

  return newFormat
}

const formatArrayRecipes = (arrayRecipes) => {
  const newFormat = []

  for (let i = 0; i < arrayRecipes.length; i++) {
    const recipe = formatElementRecipe(arrayRecipes[i])
    newFormat.push(recipe)
  }

  return newFormat
}

const formatElementRecipe = (recipe) => {
  const { ingredients, instructions } = (recipe.analyzedInstructions.length === 0)
    ? { ingredients: '', instructions: '' }
    : formatIngredientsAndInstructions(recipe.analyzedInstructions[0].steps)

  const diets = formatDiets(recipe)

  const newFormat = {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    summary: recipe.summary,
    healthScore: recipe.healthScore,
    instructions,
    ingredients,
    diets,
    preparationMinutes: recipe.preparationMinutes,
    servings: recipe.servings,
    creditsText: recipe.creditsText
  }
  return newFormat
}

const formatIngredientsAndInstructions = (arraySteps) => {
  const ingredientsSet = new Set()
  const instructions = []

  for (let i = 0; i < arraySteps.length; i++) {
    instructions.push(arraySteps[i].step)
    for (let j = 0; j < arraySteps[i].ingredients.length; j++) {
      ingredientsSet.add(arraySteps[i].ingredients[j].name)
    }
  }

  const arrayIngredients = Array.from(ingredientsSet)
  const joinIngredients = arrayIngredients.join(', ')
  const joinInstructions = instructions.join(', ')

  return {
    ingredients: joinIngredients,
    instructions: joinInstructions
  }
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
  getRecipesFromAPI
}
