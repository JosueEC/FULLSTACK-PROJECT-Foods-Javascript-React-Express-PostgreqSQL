const { Router } = require('express');

const DietController = require('../controllers/diet-controllers/Diet.controller')

const router = Router();

router.use('/', DietController)

module.exports = router