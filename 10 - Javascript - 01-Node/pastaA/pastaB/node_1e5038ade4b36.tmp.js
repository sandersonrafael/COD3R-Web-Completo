const moduloA = require('../../01-moduloA') // no linux não dá com A minúsculo
// console.log(moduloA.ola) 

// clicando em copy path com o click direito na pasta
// C:\Users\Programação\Desktop\COD3R Cursos\10 - Javascript - Node\01-moduloA.js

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)