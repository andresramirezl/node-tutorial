const http = require('node:http')

const desirePort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  console.log('request received')
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('welcome to init page página')
  }
}

const server = http.createServer(processRequest)

server.listen(desirePort, () => {
  console.log(`server listening on port http://localhost:${desirePort}`)
})
