require('dotenv').config()
const http = require('http')

function requesController(){
    console.log('Bienvenidos al curso')
}

const server = http.createServer(requesController)

const PORT=process.env.PORT
server.listen(PORT, function(){
    console.log("Aplicacion corriendo en: " + PORT)
})