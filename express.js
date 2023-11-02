const express = require('express')
const app = express()
const ditto = require('./pokemon/ditto.json')
const PORT = process.env.PORT ?? 1234

app.disable('x-powered-by')
app.use(express.json())
/*
app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  let body = ''

  req.on('data', chunk => { //
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    req.body = data
    next()
  })
})
*/
app.get('/pokemon/ditto', (req, res) => {
  // res.status(200).send('<h1>primera ruta</h1>')
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`server listenning on port http://localhost:${PORT}`)
})
