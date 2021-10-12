const router = require('express').Router()

const controller = require('../controllers/TipController')

router.get('/', controller.GetTips)

module.exports = router