const router = require('express').Router()
const multer = require('multer')
const controller = require('../controllers/TipController')




router.get('/tips', controller.GetTips)

module.exports = router