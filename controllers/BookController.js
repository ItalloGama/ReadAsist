const { Book } = require('../models')

const GetBooks = async (req, res) => {
    try {
      const books = await Book.findAll()
      res.send(books)
    } catch (error) {
      throw error
    }
  }


module.exports = {
    GetBooks
}