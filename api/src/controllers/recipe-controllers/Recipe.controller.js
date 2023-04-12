const readRecipeID = require('./services/read-recipe-ID')

const readRecipeByID = async (req, res) => {
  try {
    const { idRecipe } = req.params

    const recipe = await readRecipeID(idRecipe)
    res.status(200).json(recipe)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  readRecipeByID
}
