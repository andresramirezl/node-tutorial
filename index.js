var express = require('express')
var cors = require('cors')
var connectDB = require('./config/db.js')
var { config } = require('dotenv')

config()
connectDB(process.env.MONGODB_URL)
const app = express()

app.use(cors({
  origin: '*'
}))

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
