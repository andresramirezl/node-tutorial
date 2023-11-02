const http = require('node:http')
const dittoJSON = require('./pokemon/ditto.json')

const port = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-type', 'text/html; charset=utf-8')
          return res.end(404)
      }
    case 'POST':
      switch (url) {
        case '/pokemon/ditto':{ // const in a block
          const body = ''
          return res.end(body)
        }
        default:
          res.statusCode = 404
          res.setHeader('Content-type', 'text/plain; charset=utf-8')
          return res.end('404 NOT FOUND')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`)
})
