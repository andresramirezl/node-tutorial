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
        case '/pokemon':{ // const in a block
          let body = ''
          req.on('data', chunk => { //
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            res.end(JSON.stringify(data))
          })
          break
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
