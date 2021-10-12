const router = require('express').Router()
const controller = require('../controllers/ForumController')
const middleware = require('../middleware')


router.get('/forum', controller.GetForum)
router.post( '/forum' ,controller.CreateForum)
router.put('/forum/:id' ,controller.UpdateForum)
router.delete('/forum/:id' ,controller.DeleteForumPost)


module.exports = router
