const { Forum } = require('../models')

const GetForum = async (req, res) => {
  try {
    const forum = await Forum.findAll()
    res.send(forum)
  } catch (error) {
    throw error
  }
}

const CreateForum = async (req, res) => {
  try {
    const forum = await Forum.create({...req.body})
    res.send(forum)
  } catch (error) {
    throw error
  }
}

const UpdateForum = async (req, res) => {
  try {
    const forum = await Forum.update(
      { ...req.body },
      { where: { id: req.params.forum_id }, returning: true }
    )
    res.send(forum)
  } catch (error) {
    throw error
  }
}

const DeleteForumPost = async (req, res) => {
  try {
    await Forum.destroy({ where: { id: req.params.forum_id } })
    res.send({
      msg: 'Post Deleted',
      payload: req.params.forum,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateForum,
  GetForum,
  UpdateForum,
  DeleteForumPost
}
