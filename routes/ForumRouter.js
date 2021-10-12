const router = require('express').Router()
const controller = require('../controllers/ForumController')



router.get('/', controller.GetForum)
router.post( '/' ,controller.CreateForum)
router.put('/:forum_id' ,controller.UpdateForum)
router.delete('/:forum_id' ,controller.DeleteForumPost)


module.exports = router
