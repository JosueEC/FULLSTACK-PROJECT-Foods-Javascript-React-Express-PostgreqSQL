const { Router } = require('express')

const DietController = require('../controllers/diet-controllers/Diet.controller')

const router = Router()

router.get('/', DietController)

module.exports = router
