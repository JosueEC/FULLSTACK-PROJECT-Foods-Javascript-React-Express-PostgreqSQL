const getDiets = require('./services/get-diets')

const readDiets = async (req, res) => {
  try {
    const diets = await getDiets()
    res.status(200).json(diets)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = readDiets
