const fs = require('fs')

const caminho = __dirname + "/13-arquivo.json"


// sincrono... Não viável sempre, pois pode travar o processo até finalizar um processamento de dados
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono... ideal
fs.readFile(caminho, 'utf-8', (err, conteudo) => { //passando callback após utf-8
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
}) // por mais que tenha sido feito antes, só é executado depois, por ter demorado mais para carregar

// outra maneira mais simples de ler JSON sem precisar usar o JSON.parse() para transformar em objeto, é:

const config = require('./13-arquivo.json') //tem que ter a extensão .json nesse caso
console.log(config.db, '<= Esse aqui')

fs.readdir(__dirname, (err, arquivos) => { // __dirname representa o diretório atual
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})