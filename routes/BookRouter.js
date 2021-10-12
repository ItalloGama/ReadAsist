const router = require('express').Router()
const controller = require('../controllers/BookController')

router.get('/', controller.GetBooks)

module.exports = router