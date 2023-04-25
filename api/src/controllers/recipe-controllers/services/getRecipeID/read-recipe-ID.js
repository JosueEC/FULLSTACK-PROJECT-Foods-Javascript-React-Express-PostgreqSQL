const { getInfoRecipeFromAPI } = require('./services/get-id-recipe-API')
const { getInfoRecipeFromDatabase } = require('./services/get-id-recipe-Database')

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

module.exports = readRecipeID
