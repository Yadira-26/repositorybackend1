require('dotenv').config()
const http = require('http')

function requesController(req, res) {
    console.log('Bienvenidos al curso')
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Bienvenidos al curso')
}

const PORT = process.env.PORT || 4000

const server = http.createServer(requesController)

server.listen(PORT, '0.0.0.0', function() {
    console.log("Aplicacion corriendo en: " + PORT)
})
