// Verificar si diets esta vacia, si no hay que obtener las dietas
// y crearlas en la BD, si ya existe solo hay que devolverlas
//
// Obtener 100 recetas de la API externa
//
// Filtrar las 100 recetas para obtener solo las dietas
//
// Devolver las dietas
const readRecipesAllInfo = require('../../recipe-controllers/services/read-recipes-all-info')

const getDiets = async () => {
  const recipes = await readRecipesAllInfo()

  const diets = filterDietsFromRecipes(recipes)

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

module.exports = getDiets
