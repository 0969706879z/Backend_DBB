const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { readdirSync } = require('fs')
console.log(process.env.PORT)
const connectDB = require('./config/db')
connectDB()

app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '20mb' }))
app.use(cors())

readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))

app.get('/test', (req, res) => {
    res.send("Test")
})
app.listen(port, () => console.log("Server is running on port: " + port))
