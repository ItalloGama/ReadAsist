const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const BookRouter = require('./routes/BookRouter')
const TipRouter = require('./routes/TipRouter')
const ForumRouter = require('./routes/ForumRouter')


const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routes go here
app.use('/book', BookRouter)
app.use('/tip', TipRouter)
app.use('/forum', ForumRouter)

app.get('/', (req, res) => res.json({ message: 'Server Works' }))

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
