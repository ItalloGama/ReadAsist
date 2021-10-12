const router = require('express').Router()
const multer = require('multer')
const controller = require('../controllers/BookController')




router.get('/', controller.GetBooks)

module.exports = router