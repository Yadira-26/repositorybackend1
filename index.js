require('dotenv').config()
const http = require('http')

function requesController(req, res){
    console.log('Bienvenidos al curso')
    res.end('<h1>Bienvenidos al curso</h1>')
}

const server = http.createServer(requesController)

const PORT = process.env.PORT || 4000
server.listen(PORT, '0.0.0.0', function(){
    console.log("Aplicacion corriendo en: " + PORT)
})
