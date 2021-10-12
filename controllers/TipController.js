const { Tip } = require('../models')

const GetTips = async (req, res) => {
    try {
      const tips = await Tip.findAll()
      res.send(tips)
    } catch (error) {
      throw error
    }
  }

module.exports = {
    GetTips
  }