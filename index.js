require('dotenv').config()
const http = require('http')

function requesController(req, res) {
  console.log('Bienvenidos al curso')
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Bienvenidos al curso desde Render 🚀')
}

const PORT = process.env.PORT || 4000

const server = http.createServer(requesController)

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Aplicación corriendo en: ${PORT}`)
})
